import React from 'react';
import Pradeep from "./abc.jpg"
const EducationDetails = () => {
const profile = {
name: 'Pradeep Kumar',
supersetId: '5011093',
institution: 'Mangalmay Institute of Management and Technology, Greater Noida',
department: 'Department of Engineering',
program: 'B.Tech',
branch: 'Communication & Computer Science',
currentSemester: '8th',
rollNumber: '2007861520004',
percentage: '78%',
};

const containerStyle = {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
padding: '20px',
fontFamily: 'Arial, sans-serif',
};

const headerStyle = {
fontSize: '24px',
fontWeight: 'bold',
marginBottom: '10px',
};

const sectionStyle = {
width: '80%',
border: '1px solid #ccc',
borderRadius: '10px',
padding: '20px',
marginBottom: '20px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const fieldStyle = {
marginBottom: '10px',
};

const labelStyle = {
fontWeight: 'bold',
};

const buttonStyle = {
padding: '10px 20px',
backgroundColor: '#007bff',
color: '#fff',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
textAlign: 'center',


};

return (
<div style={containerStyle}>
    <div style={headerStyle}>Update Education Details</div>
    <div style={sectionStyle}>
    <div style={fieldStyle}>
        <img src= {Pradeep} alt="Profile" style={{ borderRadius: '50%', marginBottom: '20px', height: '90px', width: '80px' }} />
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Name:</div>
        <div>{profile.name}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>CarrerConnect ID:</div>
        <div>{profile.supersetId}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Institution:</div>
        <div>{profile.institution}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Department:</div>
        <div>{profile.department}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Program/Degree:</div>
        <div>{profile.program}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Branch/Specialization:</div>
        <div>{profile.branch}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Current Semester:</div>
        <div>{profile.currentSemester}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Institutional Roll No.:</div>
        <div>{profile.rollNumber}</div>
    </div>
    <div style={fieldStyle}>
        <div style={labelStyle}>Percentage/CGPA:</div>
        <div>{profile.percentage}</div>
    </div>
    <div style={buttonStyle}>
        <button style={buttonStyle}>Edit Info</button>
    </div>
    </div>
</div>
);
};

export default EducationDetails;
