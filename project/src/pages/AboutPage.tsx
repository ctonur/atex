import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { aboutContent } from '../data/content';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  const paragraphs = aboutContent.main[language].split('\n\n');

  return (
    <div className="pt-16">
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            {language === 'tr' ? 'Hakkımızda' : language === 'en' ? 'About Us' : 'Über Uns'}
          </h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="prose max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2760244/pexels-photo-2760244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="ATEX Plastik Factory" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            {language === 'tr' ? 'Misyon, Vizyon ve Değerlerimiz' : language === 'en' ? 'Mission, Vision and Values' : 'Mission, Vision und Werte'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language === 'tr' ? 'Misyonumuz' : language === 'en' ? 'Our Mission' : 'Unsere Mission'}
              </h3>
              <p className="text-gray-600">{aboutContent.mission[language]}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                <Eye className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language === 'tr' ? 'Vizyonumuz' : language === 'en' ? 'Our Vision' : 'Unsere Vision'}
              </h3>
              <p className="text-gray-600">{aboutContent.vision[language]}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {language === 'tr' ? 'Değerlerimiz' : language === 'en' ? 'Our Values' : 'Unsere Werte'}
              </h3>
              <p className="text-gray-600">{aboutContent.values[language]}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'tr' ? 'İş Birliği Yapalım' : language === 'en' ? 'Let\'s Collaborate' : 'Lassen Sie uns zusammenarbeiten'}
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            {language === 'tr' 
              ? 'Mühendislik plastikleri ve kompaundları alanında ihtiyaçlarınız için bizimle iletişime geçin.' 
              : language === 'en' 
                ? 'Contact us for your needs in the field of engineering plastics and compounds.' 
                : 'Kontaktieren Sie uns für Ihre Bedürfnisse im Bereich technischer Kunststoffe und Compounds.'}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-medium shadow-md transition-colors"
          >
            {language === 'tr' ? 'İletişime Geçin' : language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;