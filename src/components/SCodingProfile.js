// import React, { useState } from 'react';

// function CodingProfileForm() {
//     const [leetcodeProfile, setLeetcodeProfile] = useState('');
//     const [hackerRankProfile, setHackerRankProfile] = useState('');
//     const [codeStudioProfile, setCodeStudioProfile] = useState('');
//     const [geeksforgeeksProfile, setGeeksforgeeksProfile] = useState('');
//     const [hackerearthProfile, setHackerearthProfile] = useState('');
//     const [codeforcesProfile, setCodeforcesProfile] = useState('');
//     const [codechefProfile, setCodechefProfile] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here
//     };

//     return (
//         <div className="login-container">
//             <div className="form-content">
//                 <h3>Coding Profile</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="leetcodeProfile" className="form-label">LeetCode Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="leetcodeProfile"
//                             value={leetcodeProfile}
//                             onChange={(e) => setLeetcodeProfile(e.target.value)}
//                         />
//                     </div>
//                     {/* Add similar input fields for other coding platforms */}

//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CodingProfileForm;


// import React, { useState } from 'react';

// function CodingProfileForm() {
//     const [selectedProfile, setSelectedProfile] = useState('');
//     const [profiles, setProfiles] = useState([]);

//     const handleProfileSelect = (profile) => {
//         setSelectedProfile(profile);
//     };

//     const handleAddProfile = () => {
//         if (selectedProfile && !profiles.includes(selectedProfile)) {
//             setProfiles([...profiles, selectedProfile]);
//             setSelectedProfile('');
//         }
//     };

//     const handleRemoveProfile = (profileToRemove) => {
//         setProfiles(profiles.filter(profile => profile !== profileToRemove));
//     };

//     return (
//         <div className="login-container">
//             <div className="form-content">
//                 <h3>Coding Profile</h3>
//                 <div className="dropdown">
//                     <button
//                         className="btn btn-secondary dropdown-toggle"
//                         type="button"
//                         id="dropdownMenuButton"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                     >
//                         {selectedProfile ? selectedProfile : 'Select Profile'}
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                         <li onClick={() => handleProfileSelect('LeetCode')} className="dropdown-item">LeetCode</li>
//                         <li onClick={() => handleProfileSelect('Coding Ninja')} className="dropdown-item">Coding Ninja</li>
//                         <li onClick={() => handleProfileSelect('CodeChef')} className="dropdown-item">CodeChef</li>
//                         {/* Add more coding profiles as needed */}
//                     </ul>
//                 </div>
//                 <button onClick={handleAddProfile} className="btn btn-primary mt-3">Add Profile</button>
//                 <div>
//                     {profiles.map(profile => (
//                         <div key={profile} className="selected-profile">
//                             {profile}
//                             <span className="remove-profile" onClick={() => handleRemoveProfile(profile)}>X</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CodingProfileForm;


// import React, { useState } from 'react';

// function CodingProfileForm() {
//     const [leetcodeProfile, setLeetcodeProfile] = useState('');
//     const [hackerRankProfile, setHackerRankProfile] = useState('');
//     const [codeStudioProfile, setCodeStudioProfile] = useState('');
//     const [geeksforgeeksProfile, setGeeksforgeeksProfile] = useState('');
//     const [hackerearthProfile, setHackerearthProfile] = useState('');
//     const [codeforcesProfile, setCodeforcesProfile] = useState('');
//     const [codechefProfile, setCodechefProfile] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here
//     };

//     return (
//         <div className="login-container">
//             <div className="form-content">
//                 <h3>Coding Profile</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="leetcodeProfile" className="form-label">LeetCode Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="leetcodeProfile"
//                             value={leetcodeProfile}
//                             onChange={(e) => setLeetcodeProfile(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="hackerRankProfile" className="form-label">HackerRank Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="hackerRankProfile"
//                             value={hackerRankProfile}
//                             onChange={(e) => setHackerRankProfile(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="codeStudioProfile" className="form-label">CodeStudio Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="codeStudioProfile"
//                             value={codeStudioProfile}
//                             onChange={(e) => setCodeStudioProfile(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="geeksforgeeksProfile" className="form-label">GeeksforGeeks Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="geeksforgeeksProfile"
//                             value={geeksforgeeksProfile}
//                             onChange={(e) => setGeeksforgeeksProfile(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="hackerearthProfile" className="form-label">HackerEarth Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="hackerearthProfile"
//                             value={hackerearthProfile}
//                             onChange={(e) => setHackerearthProfile(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="codeforcesProfile" className="form-label">Codeforces Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="codeforcesProfile"
//                             value={codeforcesProfile}
//                             onChange={(e) => setCodeforcesProfile(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="codechefProfile" className="form-label">CodeChef Profile</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="codechefProfile"
//                             value={codechefProfile}
//                             onChange={(e) => setCodechefProfile(e.target.value)}
//                         />
//                     </div>

//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CodingProfileForm;

// import React, { useState } from 'react';

// function CodingProfileForm() {
//     const [includeCodingProfiles, setIncludeCodingProfiles] = useState(false);
//     const [leetcodeProfile, setLeetcodeProfile] = useState('');
//     const [hackerRankProfile, setHackerRankProfile] = useState('');
//     const [codeStudioProfile, setCodeStudioProfile] = useState('');
//     const [geeksforgeeksProfile, setGeeksforgeeksProfile] = useState('');
//     const [hackerearthProfile, setHackerearthProfile] = useState('');
//     const [codeforcesProfile, setCodeforcesProfile] = useState('');
//     const [codechefProfile, setCodechefProfile] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here
//     };

//     return (
//         <div className="login-container">
//             <div className="form-content">
//                 <h3>Coding Profile</h3>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3 form-check">
//                         <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="includeCodingProfiles"
//                             checked={includeCodingProfiles}
//                             onChange={(e) => setIncludeCodingProfiles(e.target.checked)}
//                         />
//                         <label className="form-check-label" htmlFor="includeCodingProfiles">
//                             Include Coding Profiles
//                         </label>
//                     </div>

//                     {includeCodingProfiles && (
//                         <>
//                             <div className="mb-3">
//                                 <label htmlFor="leetcodeProfile" className="form-label">LeetCode Profile</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="leetcodeProfile"
//                                     value={leetcodeProfile}
//                                     onChange={(e) => setLeetcodeProfile(e.target.value)}
//                                 />
//                             </div>
//                             {/* Add similar input fields for other coding platforms */}
//                         </>
//                     )}

//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CodingProfileForm;

import React, { useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import { Link } from 'react-router-dom';
import './SWorkExp';

function CodingProfileForm() {
    const [includeCodingProfiles, setIncludeCodingProfiles] = useState(false);
    const [leetcodeProfile, setLeetcodeProfile] = useState('');
    const [hackerRankProfile, setHackerRankProfile] = useState('');
    const [codeStudioProfile, setCodeStudioProfile] = useState('');
    const [geeksforgeeksProfile, setGeeksforgeeksProfile] = useState('');
    const [hackerearthProfile, setHackerearthProfile] = useState('');
    const [codeforcesProfile, setCodeforcesProfile] = useState('');
    const [codechefProfile, setCodechefProfile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="login-container">
            <div className="form-content">
                <h3>Coding Profile</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="includeCodingProfiles"
                            checked={includeCodingProfiles}
                            onChange={(e) => setIncludeCodingProfiles(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="includeCodingProfiles">
                            Include Coding Profiles
                        </label>
                    </div>

                    {includeCodingProfiles && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="leetcodeProfile" className="form-label">LeetCode Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="leetcodeProfile"
                                    value={leetcodeProfile}
                                    onChange={(e) => setLeetcodeProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="hackerRankProfile" className="form-label">HackerRank Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hackerRankProfile"
                                    value={hackerRankProfile}
                                    onChange={(e) => setHackerRankProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="codeStudioProfile" className="form-label">Code Studio Profile (Naukri)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="codeStudioProfile"
                                    value={codeStudioProfile}
                                    onChange={(e) => setCodeStudioProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="geeksforgeeksProfile" className="form-label">GeeksforGeeks Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="geeksforgeeksProfile"
                                    value={geeksforgeeksProfile}
                                    onChange={(e) => setGeeksforgeeksProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="hackerearthProfile" className="form-label">HackerEarth Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hackerearthProfile"
                                    value={hackerearthProfile}
                                    onChange={(e) => setHackerearthProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="codeforcesProfile" className="form-label">Codeforces Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="codeforcesProfile"
                                    value={codeforcesProfile}
                                    onChange={(e) => setCodeforcesProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="codechefProfile" className="form-label">Codechef Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="codechefProfile"
                                    value={codechefProfile}
                                    onChange={(e) => setCodechefProfile(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    <Link to='/SWorkExp'>
                    <button type="submit" className="btn btn-primary">Next</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default CodingProfileForm;
