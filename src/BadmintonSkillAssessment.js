import React, { useState } from 'react';
import './Component/Css/BadmintonSkillAssessment.css';

const BadmintonSkillAssessment = () => {
  const [technicalSkills, setTechnicalSkills] = useState({
    smashAccuracy: '',
    netPlay: '',
    clearDrive: '',
    servingAccuracy: '',
    defense: '',
  });

  const [agility, setAgility] = useState({
    multiDirectional: '',
    sideToSide: '',
    reactionAgility: '',
  });

  const [endurance, setEndurance] = useState({
    shuttleRun: '',
    yoYoTest: '',
    continuousRally: '',
  });

  const [speed, setSpeed] = useState({
    sprintSpeed: '',
    backhandForehand: '',
  });

  const [mentalToughness, setMentalToughness] = useState({
    matchScenarios: '',
    focusDrill: '',
    tacticalAnalysis: '',
    pressureReaction: '',
  });

  const handleChange = (e, category) => {
    const { name, value } = e.target;
    switch (category) {
      case 'technicalSkills':
        setTechnicalSkills({ ...technicalSkills, [name]: value });
        break;
      case 'agility':
        setAgility({ ...agility, [name]: value });
        break;
      case 'endurance':
        setEndurance({ ...endurance, [name]: value });
        break;
      case 'speed':
        setSpeed({ ...speed, [name]: value });
        break;
      case 'mentalToughness':
        setMentalToughness({ ...mentalToughness, [name]: value });
        break;
      default:
        break;
    }
  };

  // Define a function to render input fields in separate cards
  const renderCategoryCard = (title, fields, category) => (
    <div className="card" key={title}>
      <h3>{title}</h3>
      {Object.keys(fields).map((key) => (
        <label className="label" key={key}>
          {key.replace(/([A-Z])/g, ' $1')}:
          <input
            type="text"
            name={key}
            value={fields[key]}
            onChange={(e) => handleChange(e, category)}
            className="input-field"
          />
        </label>
      ))}
    </div>
  );

  return (
    <div className='assessment-container'>
          <div className="background-blur"></div>
      <h1>Badminton Assessment</h1>
      <div className='test-grid'>
        {renderCategoryCard('Technical Skills', technicalSkills, 'technicalSkills')}
        {renderCategoryCard('Agility', agility, 'agility')}
        {renderCategoryCard('Endurance', endurance, 'endurance')}
        {renderCategoryCard('Speed', speed, 'speed')}
        {renderCategoryCard('Mental Toughness', mentalToughness, 'mentalToughness')}
      </div>

      <div className="feedback-section">
        <h2>Feedback</h2>
        <textarea placeholder="Enter your feedback here..." className="feedback-input"></textarea>
        <button type="submit" className="submit-button">Submit Assessment</button>
      </div>
    </div>
  );
};

export default BadmintonSkillAssessment;
