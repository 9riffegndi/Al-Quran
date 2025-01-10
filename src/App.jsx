import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import DetailSurah from "./pages/DetailSurah";

import Navbar from "./components/Navbar";

export default function App() {
  const [theme] = useState(localStorage.getItem("theme") || "Business");

  // Menggunakan useEffect untuk mengatur tema berdasarkan yang ada di localStorage
  useEffect(() => {
    // Mengatur tema pada tag <html> setiap kali tema berubah
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Menyimpan tema yang dipilih ke localStorage
  }, [theme]);



  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah/:surahNumber" element={<DetailSurah />} />
        </Routes>
      </Router>
    </>
  );
}
