import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CricketSkillAssessmentPage from './CricketSkillAssessmentPage';
import NavBar from './Component/Page/nav';
import FootballSkillAssessmentPage from './FootballSkillAssessmentPage';
import BadmintonSkillAssessment from './BadmintonSkillAssessment';
import HomePage from './Component/Page/HomePage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/assessment" element={<CricketSkillAssessmentPage />} />


        <Route path="/foot-assessment" element={<FootballSkillAssessmentPage />} />


        <Route path="/badminton-assessment" element={<BadmintonSkillAssessment />} />
        {/* Define other routes here */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
