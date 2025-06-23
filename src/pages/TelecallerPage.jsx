import React, { useState } from 'react';
import './TelecallerPage.css';
import { useNavigate } from 'react-router-dom';

const candidatesData = [
  {
    id: 1,
    name: 'Gaurav Kharde',
    contact: '1234567891',
    mail: 'gk@gmail.com',
    experience: '2+ Yrs',
    gender: 'Male',
    company: 'SpeedUp',
    package: '5 LPA',
    city: 'Pune',
    hometown: 'Sangamner',
    education: 'Graduate'
  },
  {
    id: 2,
    name: 'Another Candidate',
    contact: '1234567891',
    mail: 'aj@gmail.com',
    experience: '2+ Yrs',
    gender: 'Male',
    company: 'SpeedUp',
    package: '5 LPA',
    city: 'Satara',
    hometown: 'Sangamner',
    education: 'Graduate'
  }
];

const TelecallerPage = () => {
  const [tab, setTab] = useState('all');
  const [shortlisted, setShortlisted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [scheduled, setScheduled] = useState([]);
  const [scheduledDetails, setScheduledDetails] = useState([]);

  const [filters, setFilters] = useState({
    location: '',
    gender: '',
    experience: '',
    education: ''
  });

  const handleShortlist = (c) => {
    if (!shortlisted.some(x => x.id === c.id)) setShortlisted([...shortlisted, c]);
  };
  const handleReject = (c) => {
    if (!rejected.some(x => x.id === c.id)) setRejected([...rejected, c]);
  };
const handleSchedule = (c) => {
  if (!scheduled.some(x => x.id === c.id)) {
    setScheduled([...scheduled, c]);
  }

  if (scheduledDetails.includes(c.id)) {
    // If already scheduled, remove it (toggle off)
    setScheduledDetails(scheduledDetails.filter(id => id !== c.id));
  } else {
    // Otherwise, add it (toggle on)
    setScheduledDetails([...scheduledDetails, c.id]);
  }
};



  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filterCandidates = (list) => {
    return list.filter(c =>
      (filters.location === '' || c.city.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.gender === '' || c.gender.toLowerCase() === filters.gender.toLowerCase()) &&
      (filters.experience === '' || c.experience.includes(filters.experience)) &&
      (filters.education === '' || c.education.toLowerCase().includes(filters.education.toLowerCase()))
    );
  };

  const getCurrentList = () => {
    if (tab === 'all') return candidatesData;
    if (tab === 'shortlisted') return shortlisted;
    if (tab === 'rejected') return rejected;
    if (tab === 'scheduled') return scheduled;
    return [];
  };

  const navigate = useNavigate(); 
 const handleGoToReport = () => {
    navigate('/report');
  };
  return (
    <div className="telecaller-container">
     <div className="telecaller-header">
  <span>Telecaller</span>
  <button className="report-button" onClick={handleGoToReport}>
    Updated Report
  </button>
</div>


      <div className="telecaller-tabs">
        <button className={tab === 'all' ? 'active' : ''} onClick={() => setTab('all')}>All Candidates</button>
        <button className={tab === 'scheduled' ? 'active' : ''} onClick={() => setTab('scheduled')}>Scheduled Interviews</button>
        <button className={tab === 'shortlisted' ? 'active' : ''} onClick={() => setTab('shortlisted')}>Shortlisted</button>
        <button className={tab === 'rejected' ? 'active' : ''} onClick={() => setTab('rejected')}>Rejected</button>
      </div>

      <div className="telecaller-body">
        <div className="telecaller-filters">
          <div className="filter-title">Filters</div>
          <input placeholder="Location" name="location" value={filters.location} onChange={handleFilterChange} />
          <input placeholder="Gender" name="gender" value={filters.gender} onChange={handleFilterChange} />
          <input placeholder="Experience" name="experience" value={filters.experience} onChange={handleFilterChange} />
          <input placeholder="Education" name="education" value={filters.education} onChange={handleFilterChange} />
        </div>

       <div className="telecaller-list">
  {filterCandidates(getCurrentList()).map(c => (
    <div key={c.id} className="candidate-card">
      <div className="candidate-header">
        <strong>{c.name}</strong> <span className="view-resume">View Resume</span>
      </div>
      <div className="candidate-details">
        <div>Contact No - {c.contact}</div>
        <div>Mail - <a href={`mailto:${c.mail}`} className="email-link">{c.mail}</a></div>
        <div>Experience - {c.experience}</div>
        <div>Gender - {c.gender}</div>
        <div>Current/Previous Company - {c.company}</div>
        <div>Current Package - {c.package}</div>
        <div>City - {c.city}</div>
        <div>Home Town - {c.hometown}</div>
        <div>Education - {c.education}</div>
      </div>

      {tab === 'all' && (
        <div className="candidate-actions">
          <button onClick={() => handleShortlist(c)}>Shortlist</button>
          <button onClick={() => handleReject(c)}>Reject</button>
          <button onClick={() => handleSchedule(c)}>Schedule Interview</button>
        </div>
      )}

      {/* {tab === 'shortlisted' && (
  <>
    <div className="shortlist-status-row">
      <span>Status :</span>
      <div className="shortlist-buttons">
        <button onClick={() => handleSchedule(c)}>Interview Scheduled</button>
        <button>Job Offered</button>
        <button onClick={() => handleReject(c)}>Reject</button>
      </div>
    </div>

    <div className="arrow-down">↓</div>

    <div className="schedule-info-box">
      <div><strong>Date :</strong> ____________</div>
      <div><strong>Time :</strong> ____________</div>
      <div><strong>Remark :</strong> ____________</div>
    </div>
  </>
)} */}
{tab === 'shortlisted' && (
  <>
    <div className="shortlist-status-row">
      <span>Status :</span>
      <div className="shortlist-buttons">
        <button onClick={() => handleSchedule(c)}>Interview Scheduled</button>
        <button>Job Offered</button>
        <button onClick={() => handleReject(c)}>Reject</button>
      </div>
    </div>

    {scheduledDetails.includes(c.id) && (
      <>
        <div className="arrow-down">↓</div>
        <div className="schedule-info-box">
          <div><strong>Date :</strong> ____________</div>
          <div><strong>Time :</strong> ____________</div>
          <div><strong>Remark :</strong> ____________</div>
        </div>
      </>
    )}
  </>
)}


    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default TelecallerPage;