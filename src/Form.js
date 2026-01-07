import React, { useState } from "react";
import Alert from "./Alert";
import emailjs from "emailjs-com";

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function Form() {
  const [alert, setAlert] = useState(null);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    other: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost/tripflow/api/insert.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            name: form.name,
            email: form.email,
            message: form.other || "No additional message provided.",
            year: new Date().getFullYear(),
          }
        );

        setAlert({
          type: "success",
          message: "Trip registered successfully. Confirmation email sent!",
        });

        setForm({
          name: "",
          age: "",
          gender: "",
          email: "",
          phone: "",
          other: "",
        });
      } else {
        setAlert({
          type: "error",
          message: data.message || "Failed to submit form",
        });
      }
    } catch (error) {
      console.error(error);
      setAlert({
        type: "error",
        message: "Server not reachable. Please try again later.",
      });
    }
  };

  return (
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
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <textarea
          name="other"
          value={form.other}
          onChange={handleChange}
          placeholder="Other info"
        ></textarea>

        <button type="submit" className="btn primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
