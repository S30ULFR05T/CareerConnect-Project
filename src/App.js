import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/home";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import About from "./components/About"
import Resource from "./components/Resource";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Stats' element={<Stats/>}/>
        <Route path="/Resource" element={<Resource/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
