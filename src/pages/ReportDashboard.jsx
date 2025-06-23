import React from 'react';
import './ReportDashboard.css';
import { FaCalendarAlt } from 'react-icons/fa';

const ReportDashboard = () => {
  return (
    <div className="report-wrapper">
      <div className="report-title">Report</div>

      <div className="section">
        <h2 className="section-heading">TODAY</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-number">24</div>
            <div className="card-label">Total Calls</div>
          </div>
          <div className="card">
            <div className="card-number">18</div>
            <div className="card-label">Total Connected Calls</div>
          </div>
          <div className="card">
            <div className="card-number">12</div>
            <div className="card-label">Total Scheduled Interviews</div>
          </div>
          <div className="card">
            <div className="card-number">08</div>
            <div className="card-label">Total Offers</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">
          THIS MONTH <FaCalendarAlt className="calendar-icon" color='red' />
        </h2>
        <div className="card-container">
          <div className="card">
            <div className="card-number">94</div>
            <div className="card-label">Total Calls</div>
          </div>
          <div className="card">
            <div className="card-number">78</div>
            <div className="card-label">Total Connected Calls</div>
          </div>
          <div className="card">
            <div className="card-number">52</div>
            <div className="card-label">Total Scheduled Interviews</div>
          </div>
          <div className="card">
            <div className="card-number">32</div>
            <div className="card-label">Total Offers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDashboard;
