// src/AboutUs.js
import React from 'react';
import '../stylesheet/About.css'; // Assuming you want to add some custom CSS

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>The journey of Upsidon started with the coming together of brilliant minds from IITs and IIM, who felt very motivated about making possible "Personalised Teaching for Personalised Learning" in a classroom of many students.</p>
      <p>
        At Upsidon, we believe teachers need to be free from time-consuming activities like making lengthy tests and assignments, making results for every student, taking doubts, tracking the progress of every student and even providing the different papers for different students. Similarly, we enhance the learning experience for the students by clearing their doubts in attempted problems, and showing them how they can improve their studies tremendously on parameters like accuracy, speed, consistency, coverage and revision. Every student is different, and our solutions are different and personalised for every different student.
      </p>
      <h2>We are amazing. Let us build your success story.</h2>
    </div>
  );
};

export default AboutUs;
