import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/home";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import About from "./components/About"
import Resource from "./components/Resource";
import Slogin from "./components/Slogin";
import Comlogin from "./components/Comlogin";
import Collogin from "./components/Collogin";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Stats' element={<Stats/>}/>
        <Route path="/Resource" element={<Resource/>}/>
        <Route path='/Slogin' element={<Slogin/>}/>
        <Route path='/Comlogin' element={<Comlogin/>}/>
        <Route path='/Collogin' element={<Collogin/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
