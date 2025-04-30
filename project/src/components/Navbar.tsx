import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { navItems } from '../data/navItems';
import { Language } from '../types';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="/"
            onClick={(e) => handleNavigation('/', e)}
            className="flex items-center"
          >
            <img src="/images/logo.png" alt="ATEX Plastik" className="h-12" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                onClick={(e) => handleNavigation(item.href, e)}
                className={`text-sm font-medium transition-colors ${
                  currentPath === item.href 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.label[language]}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => handleLanguageChange('tr')}
              className={`px-2 py-1 text-xs font-medium rounded ${
                language === 'tr' ? 'bg-primary-600 text-white' : 'text-gray-600'
              }`}
            >
              TR
            </button>
            <button 
              onClick={() => handleLanguageChange('en')}
              className={`px-2 py-1 text-xs font-medium rounded ${
                language === 'en' ? 'bg-primary-600 text-white' : 'text-gray-600'
              }`}
            >
              ENG
            </button>
            <button 
              onClick={() => handleLanguageChange('de')}
              className={`px-2 py-1 text-xs font-medium rounded ${
                language === 'de' ? 'bg-primary-600 text-white' : 'text-gray-600'
              }`}
            >
              DE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-4 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavigation(item.href, e)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  currentPath === item.href
                    ? 'text-primary-600 bg-gray-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label[language]}
              </a>
            ))}
            
            <div className="flex space-x-2 px-3 py-2">
              <button 
                onClick={() => handleLanguageChange('tr')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  language === 'tr' ? 'bg-primary-600 text-white' : 'text-gray-600 border border-gray-200'
                }`}
              >
                TR
              </button>
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  language === 'en' ? 'bg-primary-600 text-white' : 'text-gray-600 border border-gray-200'
                }`}
              >
                ENG
              </button>
              <button 
                onClick={() => handleLanguageChange('de')}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  language === 'de' ? 'bg-primary-600 text-white' : 'text-gray-600 border border-gray-200'
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;