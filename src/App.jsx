import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingRecruitment from './pages/LandingRecruitment';
import RecruitmentMenu from './pages/RecruitmentMenu';
import JobPosts from './pages/JobPosts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingRecruitment />} />
        <Route path="/recruitment-menu" element={<RecruitmentMenu />} />
           <Route path="/job-posts" element={<JobPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
