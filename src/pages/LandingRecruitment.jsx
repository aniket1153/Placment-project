import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recruitment.css';

const LandingRecruitment = () => {
  const navigate = useNavigate();

  const handleClickAnywhere = () => {
    navigate('/recruitment-menu');
  };

  return (
    <div className="recruitment-container" onClick={handleClickAnywhere}>
      <div className="recruitment-heading">Recruitment</div>
      <div className="button-group">
        <button className="location-btn">Deccan</button>
        <button className="location-btn">Kothrud</button>
        <button className="location-btn">Hadapsar</button>
      </div>
    </div>
  );
};

export default LandingRecruitment;
