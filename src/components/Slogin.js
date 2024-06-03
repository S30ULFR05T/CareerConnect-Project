// import React from 'react'
// import '../stylesheet/Slogin.css'

// function Slogin() {
//   return (
//     <div>
//       <h1>Student Login Page</h1>

//       <form>
      

//   <div class="mb-3" className='form-content'>
//     <label for="inputemail" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="emailaddress" aria-describedby="emailHelp"/>
//     <div id="emailtc" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="inputpassword" class="form-label">Password</label>
//     <input type="password" class="form-control" id="password"/>
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="check1"/>
//     <label class="form-check-label" for="check1tc">Click on this box to accept T&C and Privacy Policy</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

//     </div>
//   )
// }

// export default Slogin

// import React from 'react';
// import '../stylesheet/Slogin.css';



// function Slogin() {
//   return (
//     <div className="login-container">
//       <div className="form-content">
//         <h3>Student Login Page</h3>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="inputemail" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
//             <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="inputpassword" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" />
//           </div>
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="check1" />
//             <label className="form-check-label" htmlFor="check1tc">Click on this box to accept T&C and Privacy Policy</label>
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Slogin;

import React, { useState } from 'react';
import '../stylesheet/Slogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Slogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    axios.post('http://localhost:5000/login', { email, password })
      .then((response) => {
        console.log(response.data);
        navigate('/dashboard'); 
      })
      .catch((error) => {
        console.error(error);
        setError('Login failed. Please check your email and password and try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="form-content">
        <h3>Student Login Page</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailaddress" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailaddress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check1" required />
            <label className="form-check-label" htmlFor="check1">
              Click on this box to accept T&C and Privacy Policy
            </label>
          </div>
          {error && <div className="form-text text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Slogin;
