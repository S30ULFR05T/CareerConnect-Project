import React from 'react';

const SkillsLanguagesSubjects = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#000',
    height: '100vh',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#6200EA',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <div style={headerStyle}>Technical Skills</div>
        <div style={descriptionStyle}>You have not added any Technical Skills yet.</div>
        <button style={buttonStyle}>+ Add new</button>
      </div>
      <div style={sectionStyle}>
        <div style={headerStyle}>Languages</div>
        <div style={descriptionStyle}>You have not added any Languages yet.</div>
        <button style={buttonStyle}>+ Add new</button>
      </div>
      <div style={sectionStyle}>
        <div style={headerStyle}>Subjects</div>
        <div style={descriptionStyle}>You have not added any Subjects yet.</div>
        <button style={buttonStyle}>+ Add new</button>
      </div>
    </div>
  );
};

export default SkillsLanguagesSubjects;