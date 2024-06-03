import React, { useState } from 'react';
import '../stylesheet/Colsignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Colsignup() {
  const [body, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...body, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body.password !== body.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setLoading(true);

    axios.post('http://localhost:5000/college', body)
      .then((response) => {
        console.log(response.data);
        navigate('/dashboard'); // Replace with the actual path you want to navigate to
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to submit form. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="form-content">
        <h3>College Sign Up Page</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={body.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={body.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={body.email}
              onChange={handleChange}
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone No.</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={body.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={body.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={body.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="form-text text-danger">{error}</div>}

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check1" required />
            <label className="form-check-label" htmlFor="check1">
              Click on this box to accept T&C and Privacy Policy
            </label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Colsignup;
