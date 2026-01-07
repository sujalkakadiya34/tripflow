import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./Form";
import Contact from "./Contact";
import "./App.css";
import "./Navbar.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/Form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
