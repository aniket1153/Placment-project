import React from 'react';
import './Recruitment.css';
import { useNavigate } from 'react-router-dom';

const RecruitmentMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="recruitment-container">
      <div className="recruitment-heading">Recruitment</div>
      <div className="button-group">
        <button className="location-btn" onClick={() => navigate('/job-posts')}>Job Posts</button>
        <button className="location-btn" >Scheduled Interviews</button>
        <button className="location-btn">Offers</button>
        <button className="location-btn">Report</button>
      </div>
    </div>
  );
};

export default RecruitmentMenu;
