// // Add these imports at the top if not already there
// import React, { useState } from 'react';
// import './Component/Css/CricketSkillAssessment.css';

// const CricketSkillAssessmentPage = () => {
//   const [battingSkill, setBattingSkill] = useState({ footwork: 0, shotSelection: 0, timing: 0, balance: 0, power: 0 });
//   const [bowlingSkill, setBowlingSkill] = useState({ lineAndLength: 0, variation: 0 });
//   const [fieldingSkill, setFieldingSkill] = useState({ catching: 0, throwingAccuracy: 0 });
//   const [wicketkeepingSkill, setWicketkeepingSkill] = useState({ gloveWork: 0, stumping: 0 });
//   const [agilitySkill, setAgilitySkill] = useState({ tAgilityTime: 0, ladderDrillTime: 0 });
//   const [speedAssessment, setSpeedAssessment] = useState({ sprintTime: 0, runningBetweenWickets: 0 });
//   const [enduranceAssessment, setEnduranceAssessment] = useState({ yoYoTestShuttles: 0, threeKmRunTime: 0 });
//   const [mentalToughnessAssessment, setMentalToughnessAssessment] = useState({ pressureSituationsRating: 0, mentalChallengeScore: 0 });
//   const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = () => {
//     // Logic to submit form data
//     console.log("Form data submitted", { battingSkill, bowlingSkill, fieldingSkill, wicketkeepingSkill, agilitySkill, speedAssessment, enduranceAssessment, mentalToughnessAssessment, feedback });
//   };

//   return (
//     <div className="assessment-container">
  
    
//         {/* Existing sections for batting, bowling, fielding, and wicketkeeping... */}
//         <h1>Cricket  Assessment</h1>
//       <div className="test-grid">
//         <div className="section">
//           <h2 className="section-header">Batting Skill Test</h2>
//           {Object.keys(battingSkill).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1)}:
//               <input
//                 type="number"
//                 min="1"
//                 max="10"
//                 value={battingSkill[skill]}
//                 onChange={(e) => setBattingSkill({ ...battingSkill, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>

//         <div className="section">
//           <h2 className="section-header">Bowling Skill Test</h2>
//           {Object.keys(bowlingSkill).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1)}:
//               <input
//                 type="number"
//                 min="1"
//                 max="10"
//                 value={bowlingSkill[skill]}
//                 onChange={(e) => setBowlingSkill({ ...bowlingSkill, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>

//         <div className="section">
//           <h2 className="section-header">Fielding Skill Test</h2>
//           {Object.keys(fieldingSkill).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1)}:
//               <input
//                 type="number"
//                 min="1"
//                 max="10"
//                 value={fieldingSkill[skill]}
//                 onChange={(e) => setFieldingSkill({ ...fieldingSkill, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>

//         <div className="section">
//           <h2 className="section-header">Wicketkeeping Skill Test</h2>
//           {Object.keys(wicketkeepingSkill).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1)}:
//               <input
//                 type="number"
//                 min="1"
//                 max="10"
//                 value={wicketkeepingSkill[skill]}
//                 onChange={(e) => setWicketkeepingSkill({ ...wicketkeepingSkill, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>
//         {/* Agility Skill Test */}
//         <div className="section">
//           <h2 className="section-header">Agility Skill Test</h2>
//           {Object.keys(agilitySkill).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
//               <input
//                 type="number"
//                 min="1"
//                 value={agilitySkill[skill]}
//                 onChange={(e) => setAgilitySkill({ ...agilitySkill, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>

//         {/* Speed Assessment */}
//         <div className="section">
//           <h2 className="section-header">Speed Assessment</h2>
//           {Object.keys(speedAssessment).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
//               <input
//                 type="number"
//                 min="1"
//                 value={speedAssessment[skill]}
//                 onChange={(e) => setSpeedAssessment({ ...speedAssessment, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>

//         {/* Endurance Assessment */}
//         <div className="section">
//           <h2 className="section-header">Endurance Assessment</h2>
//           {Object.keys(enduranceAssessment).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
//               <input
//                 type="number"
//                 min="1"
//                 value={enduranceAssessment[skill]}
//                 onChange={(e) => setEnduranceAssessment({ ...enduranceAssessment, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>

//         {/* Mental Toughness Assessment */}
//         <div className="section">
//           <h2 className="section-header">Mental Toughness Assessment</h2>
//           {Object.keys(mentalToughnessAssessment).map((skill) => (
//             <label className="label" key={skill}>
//               {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
//               <input
//                 type="number"
//                 min="1"
//                 value={mentalToughnessAssessment[skill]}
//                 onChange={(e) => setMentalToughnessAssessment({ ...mentalToughnessAssessment, [skill]: e.target.value })}
//                 className="input-field"
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Feedback Section */}
//       <div className="feedback-section">
//         <h2 className="section-header">Feedback</h2>
//         <label className="label">
//           Name:
//           <input
//             type="text"
//             value={feedback.name}
//             onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
//             className="input-field"
//           />
//         </label>
//         <label className="label">
//           Email:
//           <input
//             type="email"
//             value={feedback.email}
//             onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
//             className="input-field"
//           />
//         </label>
//         <label className="label">
//           Message:
//           <textarea
//             value={feedback.message}
//             onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
//             className="input-field"
//           />
//         </label>
//       </div>

//       <button onClick={handleSubmit} className="submit-button">Submit Assessment</button>
//     </div>
//   );
// };

// export default CricketSkillAssessmentPage;
// Add these imports at the top if not already there
import React, { useState } from 'react';
import './Component/Css/CricketSkillAssessment.css';

const CricketSkillAssessmentPage = () => {
  const [battingSkill, setBattingSkill] = useState({ footwork: 0, shotSelection: 0, timing: 0, balance: 0, power: 0 });
  const [bowlingSkill, setBowlingSkill] = useState({ lineAndLength: 0, variation: 0 });
  const [fieldingSkill, setFieldingSkill] = useState({ catching: 0, throwingAccuracy: 0 });
  const [wicketkeepingSkill, setWicketkeepingSkill] = useState({ gloveWork: 0, stumping: 0 });
  const [agilitySkill, setAgilitySkill] = useState({ tAgilityTime: 0, ladderDrillTime: 0 });
  const [speedAssessment, setSpeedAssessment] = useState({ sprintTime: 0, runningBetweenWickets: 0 });
  const [enduranceAssessment, setEnduranceAssessment] = useState({ yoYoTestShuttles: 0, threeKmRunTime: 0 });
  const [mentalToughnessAssessment, setMentalToughnessAssessment] = useState({ pressureSituationsRating: 0, mentalChallengeScore: 0 });
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    // Logic to submit form data
    console.log("Form data submitted", { battingSkill, bowlingSkill, fieldingSkill, wicketkeepingSkill, agilitySkill, speedAssessment, enduranceAssessment, mentalToughnessAssessment, feedback });
  };

  return (
    <div className="assessment-container">
      <div className="background-blur"></div>
      <h1>Cricket  Assessment</h1>
      <div className="test-grid">
        <div className="section">
         <h2 className="section-header">Batting Skill Test</h2>
          {Object.keys(battingSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={battingSkill[skill]}
                onChange={(e) => setBattingSkill({ ...battingSkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        <div className="section">
          <h2 className="section-header">Bowling Skill Test</h2>
          {Object.keys(bowlingSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={bowlingSkill[skill]}
                onChange={(e) => setBowlingSkill({ ...bowlingSkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        <div className="section">
          <h2 className="section-header">Fielding Skill Test</h2>
          {Object.keys(fieldingSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={fieldingSkill[skill]}
                onChange={(e) => setFieldingSkill({ ...fieldingSkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        <div className="section">
          <h2 className="section-header">Wicketkeeping Skill Test</h2>
          {Object.keys(wicketkeepingSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={wicketkeepingSkill[skill]}
                onChange={(e) => setWicketkeepingSkill({ ...wicketkeepingSkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>
        {/* Agility Skill Test */}
        <div className="section">
          <h2 className="section-header">Agility Skill Test</h2>
          {Object.keys(agilitySkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
              <input
                type="number"
                min="1"
                value={agilitySkill[skill]}
                onChange={(e) => setAgilitySkill({ ...agilitySkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        {/* Speed Assessment */}
        <div className="section">
          <h2 className="section-header">Speed Assessment</h2>
          {Object.keys(speedAssessment).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
              <input
                type="number"
                min="1"
                value={speedAssessment[skill]}
                onChange={(e) => setSpeedAssessment({ ...speedAssessment, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        {/* Endurance Assessment */}
        <div className="section">
          <h2 className="section-header">Endurance Assessment</h2>
          {Object.keys(enduranceAssessment).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
              <input
                type="number"
                min="1"
                value={enduranceAssessment[skill]}
                onChange={(e) => setEnduranceAssessment({ ...enduranceAssessment, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        {/* Mental Toughness Assessment */}
        <div className="section">
          <h2 className="section-header">Mental Toughness Assessment</h2>
          {Object.keys(mentalToughnessAssessment).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}:
              <input
                type="number"
                min="1"
                value={mentalToughnessAssessment[skill]}
                onChange={(e) => setMentalToughnessAssessment({ ...mentalToughnessAssessment, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>
      </div>
      
      {/* Feedback Section */}
      <div className="feedback-section">
        <h2 className="section-header">Feedback</h2>
        <label className="label">
          Name:
          <input
            type="text"
            value={feedback.name}
            onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
            className="input-field"
          />
        </label>
        <label className="label">
          Email:
          <input
            type="email"
            value={feedback.email}
            onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
            className="input-field"
          />
        </label>
        <label className="label">
          Message:
          <textarea
            value={feedback.message}
            onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
            className="input-field"
          />
        </label>
      </div>
     
      <button onClick={handleSubmit} className="submit-button">Submit Assessment</button>
    </div>
  );
};

export default CricketSkillAssessmentPage;
