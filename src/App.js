import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Form from "./Form";
import Contact from "./Contact";
import "./App.css";
import "./Navbar.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
