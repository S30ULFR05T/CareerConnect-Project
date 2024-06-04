// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./components/home";
// import Stats from "./components/Stats";
// import Footer from "./components/Footer";
// import About from "./components/About"
// import Resource from "./components/Resource";
// import Slogin from "./components/Slogin";
// import Comlogin from "./components/Comlogin";
// import Collogin from "./components/Collogin";
// import Ssignup from './components/Ssignup';
// import Comsignup from './components/Comsignup';
// import Colsignup from './components/Colsignup';
// import SEducation from './components/SEducation';
// import SSkills from './components/SSkills';
// import SCertifications from './components/SCertifications';
// import SCodingProfile from './components/SCodingProfile';
// import SWorkExp from './components/SWorkExp';
// import StudentDashboard from './components/StudentDashboard'
// import Dashboard from "./components/Dashboard/Dashboard";
// import DHome from "./components/Dashboard/DHome";
// import JobProfiles from "./components/Dashboard/JobProfiles";


// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/about' element={<About/>}/>
//         <Route path='/Stats' element={<Stats/>}/>
//         <Route path="/Resource" element={<Resource/>}/>
//         <Route path='/Slogin' element={<Slogin/>}/>
//         <Route path='/Comlogin' element={<Comlogin/>}/>
//         <Route path='/Collogin' element={<Collogin/>}/>
//         <Route path="/Ssignup" element={<Ssignup/>}/>
//         <Route path='/Comsignup' element={<Comsignup/>}/>
//         <Route path='/Colsignup' element={<Colsignup/>}/>
//         <Route path='SEducation/:studentId' element={<SEducation/>}/>
//         <Route path="/SSkills/:studentId" element={<SSkills/>}/>
//         <Route path="/SCertifications/:studentId" element={<SCertifications/>}/>
//         <Route path="/SCodingProfile/:studentId" element={<SCodingProfile/>}/>
//         <Route path="/SWorkExp/:studentId" element={<SWorkExp/>}/>
//         <Route path="/StudentDashboard" element={<StudentDashboard/>}/>
//         <Route path="/Dashboard" element={<Dashboard/>}/>
//         <Route path="/DHome" element={<DHome/>}/>
//         <Route path="/JobProfiles" element={<JobProfiles/>}/>
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;

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
import Ssignup from './components/Ssignup';
import Comsignup from './components/Comsignup';
import Colsignup from './components/Colsignup';
import SEducation from './components/SEducation';
import SSkills from './components/SSkills';
import SCertifications from './components/SCertifications';
import SCodingProfile from './components/SCodingProfile';
import SWorkExp from './components/SWorkExp';
import StudentDashboard from './components/StudentDashboard'
import Dashboard from "./components/Dashboard/Dashboard";
import DHome from "./components/Dashboard/DHome";
import JobProfiles from "./components/Dashboard/JobProfiles";
import MyProfile from "./components/Dashboard/MyProfile/MyProfile";
// import BasicDetails from "./components/MyProfile/BasicDetails";
import EducationDetails from "./components/Dashboard/MyProfile/EducationDetails";
import Skills from "./components/Dashboard/MyProfile/Skills";
import Projects from "./components/Dashboard/MyProfile/Projects";

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
        <Route path="/Ssignup" element={<Ssignup/>}/>
        <Route path='/Comsignup' element={<Comsignup/>}/>
        <Route path='/Colsignup' element={<Colsignup/>}/>
        <Route path='SEducation/:studentId' element={<SEducation/>}/>
        <Route path="/SSkills/:studentId" element={<SSkills/>}/>
        <Route path="/SCertifications/:studentId" element={<SCertifications/>}/>
        <Route path="/SCodingProfile/:studentId" element={<SCodingProfile/>}/>
        <Route path="/SWorkExp/:studentId" element={<SWorkExp/>}/>
        <Route path="/StudentDashboard" element={<StudentDashboard/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/DHome" element={<DHome/>}/>
        <Route path="/JobProfiles" element={<JobProfiles/>}/>
        <Route path="/MyProfile" element={<MyProfile/>}/>
        {/* <Route path="/BasicDetails" element={<BasicDetails/>}/> */}
        <Route path="/EducationDetails" element={<EducationDetails/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;