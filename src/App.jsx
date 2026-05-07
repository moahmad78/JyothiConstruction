import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider, useModal } from './context/ModalContext';
import QuoteModal from './components/QuoteModal';
import Toast from './components/Toast';
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
import CareersPage from './pages/CareersPage';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';

const AppContent = () => {
  const { toast, hideToast } = useModal();
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-jyothi" element={<WhyJyothiPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/rmc" element={<RMC />} />
          <Route path="/services/aggregates" element={<Aggregates />} />
          <Route path="/services/blocks" element={<Blocks />} />
          <Route path="/services/fabrication" element={<Fabrication />} />
        </Routes>
      </Layout>
      <QuoteModal />
      <Toast 
        isVisible={toast.isVisible} 
        message={toast.message} 
        onClose={hideToast} 
      />
    </Router>
  );
};

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;
