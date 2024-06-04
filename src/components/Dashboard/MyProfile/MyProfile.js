import React from 'react';
import { Link } from 'react-router-dom';
import Pradeep from "./abc.jpg"
// import EducationDetails from './EducationDetails';

const MyProfile = () => {
return (
<div style={styles.profileContainer}>
    <div style={styles.sidebar}>
    <div style={styles.profileHeader}>
        <img src= {Pradeep} alt="Profile" style={styles.profileImage} />
        <div>
        <h2>Pradeep Kumar</h2>
        <p>CarrerConnect ID: 5011093</p>
        </div>
    </div>
    <ul style={styles.profileNavList}>
        <li style={styles.profileNavItem}>Basic Details</li>
        <Link to = "/EducationDetails">
        <li style={styles.profileNavItem}>Education Details</li>
        </Link>
        {/* <li style={styles.profileNavItem}>Internship & Work Ex</li> */}
        <Link to='/Skills'><li style={styles.profileNavItem}>Skills, Subjects & Languages</li></Link>
        {/* <li style={styles.profileNavItem}>Position of Responsibilities</li> */}
        <Link to='/Projects'><li style={styles.profileNavItem}>Projects</li></Link>
        {/* <li style={styles.profileNavItem}>Accomplishments</li> */}
        {/* <li style={styles.profileNavItem}>Volunteering</li> */}
        {/* <li style={styles.profileNavItem}>Extra-curricular Activities</li> */}
    </ul>
    </div>
    <div style={styles.profileDetails}>
    <h2>Basic Details</h2>
    <div style={styles.basicDetails}>
        <p><strong>Full Name: </strong>Pradeep Kumar</p>
        <p><strong>Date of Birth: </strong>21 February, 2002</p>
        <p><strong>Gender: </strong>Male</p>
        <p><strong>Current/Latest College: </strong>Mangalmay Institute of Management and Technology, Greater Noida</p>
        <p><strong>Current Course: </strong>Communication & Computer Science at Mangalmay Institute of Management and Technology, Greater Noida</p>
        <p><strong>Batch: </strong>2024 Passout Batch</p>
        <p><strong>Roll No.: </strong>2007861520004</p>
    </div>
    <div style={styles.summarySection}>
        <h3>Summary</h3>
        <p>You have not added a profile summary yet. Go ahead and write something about yourself.</p>
        <button style={styles.addNewButton}>+ Add new</button>
    </div>
    </div>
</div>
);
};

const styles = {
profileContainer: {
display: 'flex',
height: '100vh',
},
sidebar: {
width: '250px',
backgroundColor: '#fff',
padding: '20px',
borderRight: '1px solid #ddd',
},
profileHeader: {
display: 'flex',
alignItems: 'center',
marginBottom: '20px',
},
profileImage: {
width: '50px',
height: '50px',
borderRadius: '50%',
marginRight: '10px',
},
profileNavList: {
listStyleType: 'none',
padding: 0,
},
profileNavItem: {
marginBottom: '10px',
cursor: 'pointer',
},
profileDetails: {
flex: 1,
padding: '20px',
},
basicDetails: {
marginBottom: '20px',
},
summarySection: {
marginTop: '20px',
},
addNewButton: {
padding: '10px 20px',
backgroundColor: '#007bff',
color: '#fff',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
},
};

export default MyProfile;