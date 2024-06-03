// import React from 'react';
// import '../stylesheet/Comsignup.css';

// function Comsignup() {
//   return (
//     <div className="login-container">
//       <div className="form-content">
//         <h3>Company Sign Up Page</h3>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="inputfirstname" className="form-label">First Name</label>
//             <input type="text" className="form-control" id="firstname" aria-describedby="firstnamehelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="inputlastname" className="form-label">Last Name</label>
//             <input type="text" className="form-control" id="lastname" aria-describedby="lastnamehelp" />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputemail" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
//             <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputphone" className="form-label">Phone No.</label>
//             <input type="number" className="form-control" id="phonenumber" aria-describedby="phonehelp" />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputpassword" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" />
//           </div>
          
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="check1" />
//             <label className="form-check-label" htmlFor="check1">Click on this box to accept T&C and Privacy Policy</label>
//           </div>
          
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Comsignup;

// import React from 'react';
// import '../stylesheet/Colsignup.css';

// function Colsignup() {
//   return (
//     <div className="login-container">
//       <div className="form-content">
//         <h3>College Sign Up Page</h3>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="inputfirstname" className="form-label">First Name</label>
//             <input type="text" className="form-control" id="firstname" aria-describedby="firstnamehelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="inputlastname" className="form-label">Last Name</label>
//             <input type="text" className="form-control" id="lastname" aria-describedby="lastnamehelp" />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputemail" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
//             <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputphone" className="form-label">Phone No.</label>
//             <input type="number" className="form-control" id="phonenumber" aria-describedby="phonehelp" />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputpassword" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" />
//           </div>
          
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="check1" />
//             <label className="form-check-label" htmlFor="check1">Click on this box to accept T&C and Privacy Policy</label>
//           </div>
          
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Colsignup;

// import React, { useState } from 'react';
// import '../stylesheet/Comsignup.css';

// function Comsignup() {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//     } else {
//       setError('');
//       // Proceed with form submission
//       // ...
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form-content">
//         <h3>Company Sign Up Page</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="inputfirstname" className="form-label">First Name</label>
//             <input type="text" className="form-control" id="firstname" aria-describedby="firstnamehelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="inputlastname" className="form-label">Last Name</label>
//             <input type="text" className="form-control" id="lastname" aria-describedby="lastnamehelp" />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputemail" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
//             <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputphone" className="form-label">Phone No.</label>
//             <input type="tel" className="form-control" id="phonenumber" aria-describedby="phonehelp" />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputpassword" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
          
//           {error && <div className="form-text text-danger">{error}</div>}
          
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="check1" />
//             <label className="form-check-label" htmlFor="check1">Click on this box to accept T&C and Privacy Policy</label>
//           </div>
          
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Comsignup;

// import React, { useState } from 'react';
// import '../stylesheet/Comsignup.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Comsignup() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setError('');
//     setLoading(true);

//     axios.post('http://localhost:5000/company', formData)
//       .then((response) => {
//         console.log(response.data);
//         navigate('/dashboard'); // Replace with the actual path you want to navigate to
//       })
//       .catch((error) => {
//         console.error(error);
//         setError('Failed to submit form. Please try again.');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="login-container">
//       <div className="form-content">
//         <h3>Company Sign Up Page</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="firstName" className="form-label">First Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="lastName" className="form-label">Last Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="phoneNumber" className="form-label">Phone No.</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {error && <div className="form-text text-danger">{error}</div>}

//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="check1" required />
//             <label className="form-check-label" htmlFor="check1">
//               Click on this box to accept T&C and Privacy Policy
//             </label>
//           </div>

//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Comsignup;

import React, { useState } from 'react';
import '../stylesheet/Comsignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Comsignup() {
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

    axios.post('http://localhost:5000/company', body)
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
        <h3>Company Sign Up Page</h3>
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

export default Comsignup;
