import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AmbientBackground from './AmbientBackground';
import WhatsAppCTA from './WhatsAppCTA';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative z-0">
      <AmbientBackground />
      <Header />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Layout;
