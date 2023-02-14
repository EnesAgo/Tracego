import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './styles/style.css'
import City from "./View/City";
import Contact from "./View/Contact";
import Home from "./View/Home"; 

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/city/:cityName" element={<City />} />
      </Routes>
    </>
  );
}

export default App;





