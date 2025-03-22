import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import APODPage from './components/APODPage';
import EarthPage from './components/EarthPage';
import EPICPage from './components/EPICPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apod" element={<APODPage />} />
        <Route path="/earth" element={<EarthPage />} />
        <Route path="/epic" element={<EPICPage />} />
      </Routes>
    </Router>
  );
};

export default App;
