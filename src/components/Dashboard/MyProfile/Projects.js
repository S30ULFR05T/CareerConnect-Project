import React from 'react';
import photo from './side 1.png'

const NoProjects = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF',
    color: '#FFF',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  };

  const textStyle = {
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#5A67D8',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img src={photo} alt="No Projects" style={{ width: '100%', height: '75%' }} />
      </div>
      <div style={textStyle}>
        <h2>No Projects added yet</h2>
        <p>You have not added any projects yet. Please click here to add projects.</p>
      </div>
      <button style={buttonStyle}>+ Add new</button>
    </div>
  );
};

export default NoProjects;