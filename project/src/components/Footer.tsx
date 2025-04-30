import React from 'react';
import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { navItems } from '../data/navItems';
import { contactContent } from '../data/content';
import { Language } from '../types';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ATEX Plastik</h3>
            <p className="mb-4 text-gray-300">
              {t({
                tr: 'Mühendislik plastikleri ve kompaundları alanında lider çözümler.',
                en: 'Leading solutions in engineering plastics and compounds.',
                de: 'Führende Lösungen im Bereich technischer Kunststoffe und Compounds.'
              })}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t({
                tr: 'Hızlı Bağlantılar',
                en: 'Quick Links',
                de: 'Schnelllinks'
              })}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavigation(item.href, e)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label[language]}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/privacy"
                  onClick={(e) => handleNavigation('/privacy', e)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t({
                    tr: 'KVK',
                    en: 'Privacy Policy',
                    de: 'Datenschutz'
                  })}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t({
                tr: 'İletişim',
                en: 'Contact',
                de: 'Kontakt'
              })}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary-400" />
                <span className="text-gray-300">{contactContent.address.value}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary-400" />
                <span className="text-gray-300">{contactContent.factoryAddress.value}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-gray-300">{contactContent.phone.value}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-gray-300">{contactContent.email.value}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-gray-300">{contactContent.website.value}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">
                {t({
                  tr: 'Dil Seçin',
                  en: 'Select Language',
                  de: 'Sprache wählen'
                })}
              </h4>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleLanguageChange('tr')}
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    language === 'tr' ? 'bg-primary-600 text-white' : 'text-gray-300 border border-gray-700'
                  }`}
                >
                  TR
                </button>
                <button 
                  onClick={() => handleLanguageChange('en')}
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    language === 'en' ? 'bg-primary-600 text-white' : 'text-gray-300 border border-gray-700'
                  }`}
                >
                  ENG
                </button>
                <button 
                  onClick={() => handleLanguageChange('de')}
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    language === 'de' ? 'bg-primary-600 text-white' : 'text-gray-300 border border-gray-700'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ATEX Plastik. {t({
            tr: 'Tüm hakları saklıdır.',
            en: 'All rights reserved.',
            de: 'Alle Rechte vorbehalten.'
          })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;