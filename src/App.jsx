import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingRecruitment from './pages/LandingRecruitment';
import RecruitmentMenu from './pages/RecruitmentMenu';

import TelecallerPage from './pages/TelecallerPage';
import JobPostContainer from './pages/JobPostContainer';
import ReportDashboard from './pages/ReportDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingRecruitment />} />
        <Route path="/recruitment-menu" element={<RecruitmentMenu />} />
           <Route path="/job-posts" element={<JobPostContainer />} />
           <Route path="/TelecallerPage" element={<TelecallerPage />} />
           <Route path="/report" element={<ReportDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
