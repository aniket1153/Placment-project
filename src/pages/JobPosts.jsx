import React, { useState } from "react";
import "./JobPosts.css";

const JobPosts = () => {
  const [jobPosts, setJobPosts] = useState([
    "Telecaller",
    "Counsellor",
    "Trainer",
    "HR",
    "Trainer",
    "HR"
  ]);
  const [showAddJob, setShowAddJob] = useState(false);
  const [showAddData, setShowAddData] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [requirementCount, setRequirementCount] = useState("");
  const [selectedRole, setSelectedRole] = useState("Telecaller");

  const handleAddJob = () => {
    if (newRole) {
      setJobPosts([...jobPosts, newRole]);
      setNewRole("");
      setRequirementCount("");
    }
  };

  const jobOptions = [...new Set(jobPosts)];

  const handleToggleAddJob = () => {
    setShowAddJob((prev) => !prev);
    setShowAddData(false);
  };

  const handleToggleAddData = () => {
    setShowAddData((prev) => !prev);
    setShowAddJob(false);
  };

  return (
    <div className="container">
      <div className="left">
        <div className="header">Job Posts</div>
        <div className="job-list">
          {jobPosts.map((job, index) => (
            <div key={index} className="job-item">
              <span className="index">{index + 1}.</span> <span className="job">{job}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="right">

        {/* Add Job section */}
        <div className="action-section">
          <button className="btn" onClick={handleToggleAddJob}>
            Add Job
          </button>
          {showAddJob && (
            <div className="form-box">
              <input
                type="text"
                placeholder="Role"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              />
              <input
                type="text"
                placeholder="Requirement Count"
                value={requirementCount}
                onChange={(e) => setRequirementCount(e.target.value)}
              />
              <button className="btn" onClick={handleAddJob}>
                Add
              </button>
            </div>
          )}
        </div>

        {/* Add Data section */}
       {/* Add Data section */}
<div className="action-section">
  <button className="btn" onClick={handleToggleAddData}>
    Add Data
  </button>

  {showAddData && (
    <div className="form-box">
      <label>Role:</label>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        {jobOptions.map((role, idx) => (
          <option key={idx}>{role}</option>
        ))}
      </select>

      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
        accept=".csv, .xlsx, .xls"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            alert(`File selected: ${file.name}`);
            // You can handle file parsing here if needed
          }
        }}
      />

      <button
        className="upload-btn"
        onClick={() => document.getElementById("fileUpload").click()}
      >
        Upload
      </button>

      <p className="file-format">Excel / CSV / SVC [FORMAT]</p>
    </div>
  )}
</div>


      </div>
    </div>
  );
};

export default JobPosts;
