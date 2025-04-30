import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EngineeredCompoundsPage from './pages/EngineeredCompoundsPage';
import CircularPlasticPage from './pages/CircularPlasticPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  // Initialize with current path or default to home
  const initialPath = window.location.pathname || '/';
  
  // Ensure initial history state is set
  if (!window.history.state) {
    window.history.replaceState({ path: initialPath }, '', initialPath);
  }

  const [currentPath, setCurrentPath] = useState(initialPath);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = event.state?.path || window.location.pathname;
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({ path }, '', path);
    setCurrentPath(path);
  };

  const getPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/engineered-compounds':
        return <EngineeredCompoundsPage />;
      case '/circular-plastic':
        return <CircularPlasticPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      default:
        // For unknown routes, redirect to home
        if (currentPath !== '/') {
          window.history.replaceState({ path: '/' }, '', '/');
          return <HomePage />;
        }
        return <HomePage />;
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor?.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = anchor.getAttribute('href') || '/';
        navigateTo(href);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar currentPath={currentPath} onNavigate={navigateTo} />
        <main className="flex-grow">
          {getPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;