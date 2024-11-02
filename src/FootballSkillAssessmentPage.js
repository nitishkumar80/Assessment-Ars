import React, { useState } from 'react';
import './Component/Css/CricketSkillAssessment.css';

const FootballSkillAssessmentPage = () => {
  const [ballControlSkill, setBallControlSkill] = useState({ dribbling: 0, firstTouch: 0 });
  const [passingSkill, setPassingSkill] = useState({ targetPassing: 0, longPass: 0 });
  const [shootingSkill, setShootingSkill] = useState({ accuracy: 0, oneOnOne: 0 });
  const [tacticalAwarenessSkill, setTacticalAwarenessSkill] = useState({ gameSituation: 0 });
  const [agilitySkill, setAgilitySkill] = useState({ shuttleRun: 0, coneWeave: 0, illinoisTest: 0 });
  const [speedAssessment, setSpeedAssessment] = useState({ sprintTime: 0, flying20Time: 0, reactionTime: 0 });
  const [enduranceAssessment, setEnduranceAssessment] = useState({ yoYoTest: 0, beepTest: 0, smallSidedGame: 0 });
  const [mentalToughnessAssessment, setMentalToughnessAssessment] = useState({ pressureSimulation: 0, focusTest: 0, visualization: 0 });
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    console.log("Form data submitted", { ballControlSkill, passingSkill, shootingSkill, tacticalAwarenessSkill, agilitySkill, speedAssessment, enduranceAssessment, mentalToughnessAssessment, feedback });
  };

  return (
    <div className="assessment-container">
      <h1>Football Skill Assessment</h1>
      <div className="test-grid">
        {/* Ball Control Skill Test */}
        <div className="section">
          <h2 className="section-header">Ball Control Skill Test</h2>
          {Object.keys(ballControlSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={ballControlSkill[skill]}
                onChange={(e) => setBallControlSkill({ ...ballControlSkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        {/* Passing Skill Test */}
        <div className="section">
          <h2 className="section-header">Passing Skill Test</h2>
          {Object.keys(passingSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={passingSkill[skill]}
                onChange={(e) => setPassingSkill({ ...passingSkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        {/* Shooting Skill Test */}
        <div className="section">
          <h2 className="section-header">Shooting Skill Test</h2>
          {Object.keys(shootingSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={shootingSkill[skill]}
                onChange={(e) => setShootingSkill({ ...shootingSkill, [skill]: e.target.value })}
                className="input-field"
              />
            </label>
          ))}
        </div>

        {/* Tactical Awareness Skill Test */}
        <div className="section">
          <h2 className="section-header">Tactical Awareness Skill Test</h2>
          {Object.keys(tacticalAwarenessSkill).map((skill) => (
            <label className="label" key={skill}>
              {skill.charAt(0).toUpperCase() + skill.slice(1)}:
              <input
                type="number"
                min="1"
                max="10"
                value={tacticalAwarenessSkill[skill]}
                onChange={(e) => setTacticalAwarenessSkill({ ...tacticalAwarenessSkill, [skill]: e.target.value })}
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

export default FootballSkillAssessmentPage;
