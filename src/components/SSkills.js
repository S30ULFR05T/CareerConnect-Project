// import React, { useState } from 'react';
// import '../stylesheet/StudentGlobal.css';

// function SkillForm() {
//     const [domain, setDomain] = useState('');
//     const [selectedSkills, setSelectedSkills] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [skillsList, setSkillsList] = useState([
//         "Skill 1",
//         "Skill 2",
//         "Skill 3",
//         "Skill 4",
//         "Skill 5",
//         "Skill 6",
//         "Skill 7",
//         "Skill 8",
//         "Skill 9",
//         "Skill 10"
//     ]);

//     const handleDomainChange = (e) => {
//         setDomain(e.target.value);
//         setSelectedSkills([]);
//     };

//     const handleSkillSelect = (skill) => {
//         if (selectedSkills.length < 10 && !selectedSkills.includes(skill)) {
//             setSelectedSkills([...selectedSkills, skill]);
//         }
//     };

//     const handleSkillRemove = (skill) => {
//         setSelectedSkills(selectedSkills.filter(item => item !== skill));
//     };

//     const filteredSkills = skillsList.filter(skill =>
//         skill.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className="login-container">
//             <div className="form-content">
//                 <h3>Skill Selection</h3>
//                 <form>
//                     <div className="mb-3">
//                         <label htmlFor="domain" className="form-label">Select Domain</label>
//                         <select
//                             className="form-control"
//                             id="domain"
//                             value={domain}
//                             onChange={handleDomainChange}
//                         >
//                             <option value="">Select Domain</option>
//                             <option value="Domain 1">Domain 1</option>
//                             <option value="Domain 2">Domain 2</option>
//                             {/* Add more domain options as needed */}
//                         </select>
//                     </div>

//                     {domain && (
//                         <div className="mb-3">
//                             <label htmlFor="skills" className="form-label">Select Skills (Up to 10)</label>
//                             <div className="dropdown">
//                                 <button
//                                     className="btn btn-secondary dropdown-toggle"
//                                     type="button"
//                                     id="dropdownMenuButton"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     Select Skills
//                                 </button>
//                                 <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                     <li>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="Search for skills"
//                                             value={searchQuery}
//                                             onChange={(e) => setSearchQuery(e.target.value)}
//                                         />
//                                     </li>
//                                     {filteredSkills.map(skill => (
//                                         <li
//                                             key={skill}
//                                             className={`dropdown-item ${selectedSkills.includes(skill) ? 'selected' : ''}`}
//                                             onClick={() => handleSkillSelect(skill)}
//                                         >
//                                             {skill}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     )}

//                     <div className="selected-skills">
//                         {selectedSkills.map(skill => (
//                             <div key={skill} className="selected-skill">
//                                 {skill}
//                                 <span className="remove-skill" onClick={() => handleSkillRemove(skill)}>X</span>
//                             </div>
//                         ))}
//                     </div>

//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SkillForm;

import React, { useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import { Link } from 'react-router-dom';
import './SCertifications'

function SkillForm() {
    const [domain, setDomain] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [skillsList, setSkillsList] = useState([
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "Ruby",
        "HTML",
        "CSS",
        "SQL",
        "PHP",
        "React",
        "Angular",
        "Node.js",
        "Express",
        "Django",
        "Flask",
        "Machine Learning",
        "Deep Learning",
        "Data Structures",
        "Algorithms",
        "Computer Networks",
        "Operating Systems",
        "Database Management",
        "Cyber Security",
        "Cloud Computing"
    ]);

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
        setSelectedSkills([]);
    };

    const handleSkillSelect = (skill) => {
        if (selectedSkills.length < 10 && !selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleSkillRemove = (skill) => {
        setSelectedSkills(selectedSkills.filter(item => item !== skill));
    };

    const filteredSkills = skillsList.filter(skill =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="login-container">
            <div className="form-content">
                <h3>Skill Selection</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="domain" className="form-label">Select Domain</label>
                        <select
                            className="form-control"
                            id="domain"
                            value={domain}
                            onChange={handleDomainChange}
                        >
                            <option value="">Select Domain</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Networking">Networking</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            {/* Add more domain options as needed */}
                        </select>
                    </div>

                    {domain && (
                        <div className="mb-3">
                            <label htmlFor="skills" className="form-label">Select Skills (Up to 10)</label>
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Select Skills
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search for skills"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </li>
                                    {filteredSkills.map(skill => (
                                        <li
                                            key={skill}
                                            className={`dropdown-item ${selectedSkills.includes(skill) ? 'selected' : ''}`}
                                            onClick={() => handleSkillSelect(skill)}
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className="selected-skills">
                        {selectedSkills.map(skill => (
                            <div key={skill} className="selected-skill">
                                {skill}
                                <span className="remove-skill" onClick={() => handleSkillRemove(skill)}>X</span>
                            </div>
                        ))}
                    </div>
                    <Link to='/SCertifications'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default SkillForm;
