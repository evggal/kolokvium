import './App.css';
import { Routes, Route } from 'react-router-dom';
import LaboratorySelection from './pages/laboratorySelection/laboratorySelection';
import LaboratoryInfo from './pages/laboratoryInfo/laboratoryInfo';
import ScrollToTop from './function/scrollToTop/scrollToTop';
import EventCalendar from './pages/eventCalendar/eventCalendar';
import LoginPage from './pages/loginPage/loginPage';

function App() {
  ScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<LaboratorySelection />} />
      <Route path="/labInfo" element={<LaboratoryInfo />} />
      <Route path="/events" element={<EventCalendar />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
