// src/AboutUs.js
import React, { useState } from 'react';
import '../stylesheet/About.css'; // Updated the import to match the CSS filename

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
      The journey of CareerConnect started with the coming together of visionary leaders from top institutions, who felt driven to revolutionize the campus hiring process and bridge the gap between students and their dream careers.
      </p>
      {showMore && (
        <div className="more-info">
          <p>
          At CareerConnect, we believe that the hiring process should be efficient, transparent, and tailored to the needs of both students and employers. We aim to free recruiters from time-consuming tasks like sorting through numerous resumes, coordinating interviews, and evaluating candidates through traditional methods. Our platform streamlines these activities, allowing recruiters to focus on identifying the best talent. Similarly, we enhance the job search experience for students by providing personalized job recommendations, real-time feedback, and insights on how they can improve their employability. Every student is unique, and our solutions are personalized to cater to the diverse needs of each individual.

          </p>
        </div>
      )}
      <button className="toggle-button" onClick={handleToggle}>
        {showMore ? 'Show Less' : 'Read More'}
      </button>
      <h2>We are transformative. Let us build your success story.</h2>
    </div>
  );
};

export default AboutUs;
