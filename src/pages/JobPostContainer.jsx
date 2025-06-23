import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobPostContainer.css';

const JobPostContainer = () => {
  const [showJobForm, setShowJobForm] = useState(false);
  const [showDataForm, setShowDataForm] = useState(false);
  const [role, setRole] = useState('');
  const [count, setCount] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Uploaded File:', file);
    // Optionally parse CSV/Excel here
  } else {
    console.log('No file selected');
  }
};

  const jobRoles = [
    'Telecaller',
    'Counsellor',
    'Trainer',
    'HR',
    'Trainer',
    'HR'
  ];

  const handleRoleClick = (role) => {
    if (role === 'Telecaller') {
      navigate('/TelecallerPage');
    } else {
      alert(`No route defined for "${role}" yet.`);
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Left Side: Job List */}
      <div className="left-panel">
        <h2 className="title">Job Posts</h2>
        <ul className="job-list">
          {jobRoles.map((role, index) => (
            <li
              key={index}
              className="job-item"
              onClick={() => handleRoleClick(role)}
            >
              {index + 1}. <span>{role}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Forms */}
      <div className="right-panel">
        <button className="btn" onClick={() => setShowJobForm(!showJobForm)}>
          Add Job
        </button>
        {showJobForm && (
          <div className="input-box">
            <label>Role:</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <label>Requirement Count:</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
        )}

        <button className="btn" onClick={() => setShowDataForm(!showDataForm)}>
          Add Data
        </button>
        {showDataForm && (
          <div className="dropdown-box">
            <label>Role:</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Telecaller">Telecaller</option>
              <option value="HR">HR</option>
              <option value="Trainer">Trainer</option>
            </select>
            <div className="upload-box">
  <input
    type="file"
    accept=".csv, .xls, .xlsx"
    id="fileUpload"
    onChange={(e) => handleFileUpload(e)}
    hidden
  />
  <label htmlFor="fileUpload" className="upload-btn">
    Upload
  </label>
  <span className="file-hint">Excel / CSV / SVC [FORMAT]</span>
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default JobPostContainer;
