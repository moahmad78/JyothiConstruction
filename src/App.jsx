import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import WhyJyothiPage from './pages/WhyJyothiPage';
import ContactPage from './pages/ContactPage';
import Construction from './pages/services/Construction';
import RMC from './pages/services/RMC';
import Aggregates from './pages/services/Aggregates';
import Blocks from './pages/services/Blocks';
import Fabrication from './pages/services/Fabrication';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  console.log("%c🛡️ PRECISION ENGINEERED BY SAHIL SHEIKH | IG: @SAHIL_SHEIKH78", "color: #00ff00; font-weight: bold; font-size: 14px;");
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-jyothi" element={<WhyJyothiPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/rmc" element={<RMC />} />
          <Route path="/services/aggregates" element={<Aggregates />} />
          <Route path="/services/blocks" element={<Blocks />} />
          <Route path="/services/fabrication" element={<Fabrication />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
