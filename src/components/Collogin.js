import React, { useState } from 'react';
import '../stylesheet/Collogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Collogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('http://localhost:5000/collegelogin', { email, password })
      .then((response) => {
        console.log(response.data);
        // Assuming you get a token or some user data in the response
        // Save the token or handle successful login logic
        navigate('/dashboard'); // Replace with the actual path you want to navigate to
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to log in. Please check your credentials and try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="form-content">
        <h3>College Login Page</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailaddress" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailaddress"
              value={email}
              onChange={handleEmailChange}
              aria-describedby="emailHelp"
              required
            />
            <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {error && <div className="form-text text-danger">{error}</div>}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check1" required />
            <label className="form-check-label" htmlFor="check1">Click on this box to accept T&C and Privacy Policy</label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Collogin;
