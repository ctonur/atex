import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CircularSeries } from '../types';

interface SeriesCardProps {
  series: CircularSeries;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-green-500">
      <div className="p-5">
        <div className="bg-green-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
          {series.code}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {series.name[language]}
        </h3>
        <p className="text-gray-600 mb-4">{series.description[language]}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            {language === 'tr' ? 'Uygulamalar' : language === 'en' ? 'Applications' : 'Anwendungen'}:
          </h4>
          <div className="flex flex-wrap gap-2">
            {series.applications.map((app, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded">
                {app}
              </span>
            ))}
          </div>
        </div>
        
        <a
          href={`/circular-plastic/series/${series.id}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          {language === 'tr' ? 'Detaylar' : language === 'en' ? 'Details' : 'Details'}
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default SeriesCard;