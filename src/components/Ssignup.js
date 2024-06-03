import React, { useEffect, useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import './SEducation'
import { Link } from 'react-router-dom';

function Ssignup() {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Proceed with form submission
      // ...
    }
  };
  
  return (
    <div className="login-container">
      <div className="form-content">
        <h3>Student Sign Up Page</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputfirstname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstname" aria-describedby="firstnamehelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="inputlastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastname" aria-describedby="lastnamehelp" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="inputemail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
            <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="inputphone" className="form-label">Phone No.</label>
            <input type="tel" className="form-control" id="phonenumber" aria-describedby="phonehelp" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="inputpassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          {error && <div className="form-text text-danger">{error}</div>}
          
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check1" />
            <label className="form-check-label" htmlFor="check1">Click on this box to accept T&C and Privacy Policy</label>
          </div>
          <Link to='/SEducation'>
          <button type="submit" className="btn btn-primary">Next</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Ssignup;
