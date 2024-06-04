// import React from 'react';

// const JobProfiles = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.jobListContainer}>
//         <ul style={styles.jobList}>
//           {jobData.map((job, index) => (
//             <li key={index} style={styles.jobItem}>
//               <div style={styles.jobLogo}>
//                 <img src={job.logo} alt="Company Logo" style={styles.logoImage} />
//               </div>
//               <div style={styles.jobDetails}>
//                 <div style={styles.jobTitle}>{job.title}</div>
//                 <div style={styles.jobCompany}>{job.company} | {job.location}</div>
//                 <div style={styles.jobDate}>{job.date}</div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div style={styles.jobDescriptionContainer}>
//         <div style={styles.jobDescriptionHeader}>
//           <div>Graphic Designer - Remote Job Role</div>
//           <div style={styles.eligibilityCriteria}>You are not eligible for this job opening</div>
//         </div>
//         <div style={styles.jobDescription}>
//           <h2>Opening Overview</h2>
//           <p>Category: Not Specified</p>
//           <p>Job Functions: Not Specified</p>
//           <p>Job Profile CTC: Not Specified</p>
//           <p>Other Info: Not Specified</p>
//         </div>
//         <div style={styles.jobDescription}>
//           <h2>Required Skills</h2>
//           <p>Not Specified</p>
//         </div>
//         <div style={styles.jobDescription}>
//           <h2>Additional Information</h2>
//           <p>Not Specified</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     height: '100%',
//     fontFamily: 'Arial, sans-serif',
//   },
//   jobListContainer: {
//     width: '30%',
//     borderRight: '1px solid #ddd',
//     overflowY: 'auto',
//     backgroundColor: '#f9f9f9',
//   },
//   jobList: {
//     listStyleType: 'none',
//     padding: 0,
//     margin: 0,
//   },
//   jobItem: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     borderBottom: '1px solid #ddd',
//   },
//   jobLogo: {
//     marginRight: '10px',
//   },
//   logoImage: {
//     width: '50px',
//     height: '50px',
//   },
//   jobDetails: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   jobTitle: {
//     fontWeight: 'bold',
//   },
//   jobCompany: {
//     color: '#666',
//   },
//   jobDate: {
//     color: '#999',
//   },
//   jobDescriptionContainer: {
//     width: '70%',
//     padding: '20px',
//     overflowY: 'auto',
//   },
//   jobDescriptionHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   eligibilityCriteria: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
//   jobDescription: {
//     marginBottom: '20px',
//   },
// };

// const jobData = [
//   {
//     title: 'Graphic Designer - Remote Job Role',
//     company: 'Cimpress',
//     location: 'Remote',
//     date: '2 months ago',
//     logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
//   },
//   {
//     title: 'Graphic Designer - Remote Job Role',
//     company: 'Cimpress',
//     location: 'Remote',
//     date: '5 months ago',
//     logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
//   },
//   {
//     title: 'Business Development Associate-Program Advisor (H)',
//     company: 'Skill-Lync',
//     location: 'Bangalore',
//     date: 'a year ago',
//     logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
//   },
//   {
//     title: 'Inside Sales Internship - 2',
//     company: 'Skill-Lync',
//     location: 'Chennai',
//     date: 'a year ago',
//     logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
//   },
// ];

// export default JobProfiles;

import React from 'react';
import './JobProfiles.css';

const JobProfiles = () => {
  return (
    <div className="container">
      <div className="jobListContainer">
        <ul className="jobList">
          {jobData.map((job, index) => (
            <li key={index} className="jobItem">
              <div className="jobLogo">
                <img src={job.logo} alt="Company Logo" className="logoImage" />
              </div>
              <div className="jobDetails">
                <div className="jobTitle">{job.title}</div>
                <div className="jobCompany">{job.company} | {job.location}</div>
                <div className="jobDate">{job.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="jobDescriptionContainer">
        <div className="jobDescriptionHeader">
          <div>Graphic Designer - Remote Job Role</div>
          {/* <div className="eligibilityCriteria">You are not eligible for this job opening</div>     */}
        </div>
        <div className="jobDescription">
          <h2>Opening Overview</h2>
          <p>Category: Not Specified</p>
          <p>Job Functions: Not Specified</p>
          <p>Job Profile CTC: Not Specified</p>
          <p>Other Info: Not Specified</p>
        </div>
        <div className="jobDescription">
          <h2>Required Skills</h2>
          <p>Not Specified</p>
        </div>
        <div className="jobDescription">
          <h2>Additional Information</h2>
          <p>Not Specified</p>
        </div>
      </div>
    </div>
  );
};

const jobData = [
  {
    title: 'Graphic Designer - Remote Job Role',
    company: 'Cimpress',
    location: 'Remote',
    date: '2 months ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
  {
    title: 'Graphic Designer - Remote Job Role',
    company: 'Cimpress',
    location: 'Remote',
    date: '5 months ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
  {
    title: 'Business Development Associate-Program Advisor (H)',
    company: 'Skill-Lync',
    location: 'Bangalore',
    date: 'a year ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
  {
    title: 'Inside Sales Internship - 2',
    company: 'Skill-Lync',
    location: 'Chennai',
    date: 'a year ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
];

export default JobProfiles;