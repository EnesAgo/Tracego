import React, { useState, useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import './styles/style.css'
import City from "./View/City";
import Contact from "./View/Contact";
import Home from "./View/Home"; 
import Order from "./View/Order";

function App() {

  return (
    <>
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/city/:cityName" element={<City />} />
        <Route exact path="/order/:cityName" element={<Order />} />
      </Routes>
    </Wrapper>
    </>
  );
}

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

export default App;





