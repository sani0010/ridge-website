import React from 'react';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';  // Example pages
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';
import Footer from './components/Footer';
import EventDetail from './components/EventDetail';
import EntryRequirements from './pages/EntryRequirements';
import FeesSchedule from './pages/FeesSchedule';
import LivingAndStudying from './pages/LivingAndStudying';
import StudentSupportServices from './pages/StudentSupportServices';
import FormsPage from './pages/FormsPage';
import HomeNoticePage from './pages/HomeNoticePage';
import Events from './pages/Events';
import BlogPage from './pages/BlogPage';
import AffiliationsPartners from './pages/AffiliationsPartners';
import UsefulInfo from './pages/UsefulInfo';
import UniqueStudentIdentifier from './pages/UniqueStudentIdentifier';
import PoliciesPage from './pages/PoliciesPage';



function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseName" element={<CourseDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/requirements" element={<EntryRequirements />} />
        <Route path="/schedule" element={<FeesSchedule />} />
        <Route path="/living" element={<LivingAndStudying />} />
        <Route path="/services" element={<StudentSupportServices />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/notice" element={<HomeNoticePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/affiliations" element={<AffiliationsPartners />} />
        <Route path="/info" element={<UsefulInfo />} />
        <Route path="/identifier" element={<UniqueStudentIdentifier />} />
        <Route path="/policy" element={<PoliciesPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
