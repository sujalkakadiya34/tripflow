import React, { useState, useRef } from "react";
import Alert from "./Alert";
import emailjs from "emailjs-com";
import "./App.css";

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function Form() {
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const submitLock = useRef(false);  
  const abortRef = useRef(null);     

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    other: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "email"
          ? value.toLowerCase().trim()
          : name === "phone"
          ? value.replace(/\s+/g, "")
          : value,
    });

    setFieldErrors({ ...fieldErrors, [name]: null });
  };

  const logConsole = (formData, errors) => {
    if (process.env.NODE_ENV !== "development") return;

    const now = new Date().toLocaleString("en-GB", { hour12: true });

    if (errors.length > 0) {
      console.groupCollapsed(
        `%c✖ FORM SUBMISSION FAILED | ${now}`,
        "color:#C62828;font-weight:bold;"
      );
      errors.forEach((err) =>
        console.log(`%c❌ ${err}`, "color:#C62828;font-weight:600;")
      );
      console.groupEnd();
      return;
    }

    console.groupCollapsed(
      `%c✔ FORM SUBMISSION SUCCESS | ${now}`,
      "color:#2E7D32;font-weight:bold;"
    );
    console.log("%cName:", "font-weight:600;", formData.name);
    console.log("%cEmail:", "font-weight:600;", formData.email);
    console.groupEnd();
  };

  const validateForm = () => {
    const errors = {};
    const errorList = [];

    if (!form.name.trim()) errors.name = "Name is required";
    else if (form.name.length < 3) errors.name = "Name too short";
    else if (!/^[a-zA-Z\s]+$/.test(form.name)) errors.name = "Only letters allowed";

    if (!form.age) errors.age = "Age is required";
    else if (+form.age < 18) errors.age = "User is minor";
    else if (+form.age > 100) errors.age = "Invalid age";

    if (!form.gender.trim()) errors.gender = "Gender is required";
    else if (!["male", "female", "other"].includes(form.gender.toLowerCase()))
      errors.gender = "Invalid gender";

    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Invalid email";

    if (!form.phone.trim()) errors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone))
      errors.phone = "Phone must be 10 digits";

    if (!form.other.trim()) errors.other = "Message is required";
    else if (form.other.length < 10) errors.other = "Message too short";
    else if (form.other.length > 500) errors.other = "Message too long";

    Object.values(errors).forEach((e) => errorList.push(e));
    setFieldErrors(errors);

    return errorList;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitLock.current) return;
    submitLock.current = true;
    setLoading(true);

    const errors = validateForm();
    logConsole(form, errors);

    if (errors.length > 0) {
      setAlert({ type: "error", message: "Please fix the form errors." });
      submitLock.current = false;
      setLoading(false);
      return;
    }
    abortRef.current = new AbortController();
    const timeoutId = setTimeout(() => {
      abortRef.current.abort();
    }, 12000);

    const submitRequest = async (retried = false) => {
      try {
        const res = await fetch("http://localhost/tripflow/api/insert.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
          signal: abortRef.current.signal,
        });

        const data = await res.json();
        if (!data.success) throw new Error(data.message || "Submission failed");

        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            name: form.name,
            email: form.email,
            message: form.other,
            year: new Date().getFullYear(),
          }
        );

        setAlert({
          type: "success",
          message: "Trip registered successfully!",
        });

        setForm({
          name: "",
          age: "",
          gender: "",
          email: "",
          phone: "",
          other: "",
        });
      } catch (err) {
        if (!retried && err.name !== "AbortError") {
          return submitRequest(true);  
        }

        setAlert({
          type: "error",
          message:
            err.name === "AbortError"
              ? "Request timed out. Try again."
              : err.message || "Server error",
        });
      } finally {
        clearTimeout(timeoutId);
        submitLock.current = false;
        setLoading(false);
      }
    };

    submitRequest();
  };

  return (
    <section id="trip-form-wrapper">
      <div className="container" id="trip-form">
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        <h3>Trip Registration</h3>

        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" />
          <input name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
          <textarea name="other" value={form.other} onChange={handleChange} placeholder="Other info" />

          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
