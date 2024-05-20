// import React from 'react'
// import '../stylesheet/Slogin.css'

// function Slogin() {
//   return (
//     <div>
//       <h1>Student Login Page</h1>

//       <form>
//   <div class="mb-3" className='form-content'>
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

//     </div>
//   )
// }

// export default Slogin


import React, { useState } from 'react';
import SignupOptions from '../components/SignupOptions';
import PersonalDetailsForm from '../components/PersonalDetailForm';
import OTPScreen from '../components/OTPScreen';
import EducationForm from '../components/EducationForm';
import SkillsForm from '../components/SkillsForm';
import ProjectForm from '../components/ProjectForm';

function Slogin() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    education: [],
    skills: [],
    projects: [],
  });

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SignupOptions nextStep={handleNextStep} />;
      case 2:
        return <PersonalDetailsForm nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 3:
        return <OTPScreen nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 4:
        return <EducationForm nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 5:
        return <SkillsForm nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 6:
        return <ProjectForm nextStep={handleNextStep} prevStep={handlePrevStep} />;
      default:
        return <SignupOptions nextStep={handleNextStep} />;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default Slogin;
