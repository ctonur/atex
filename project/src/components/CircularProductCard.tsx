import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CircularProduct } from '../types';

interface CircularProductCardProps {
  product: CircularProduct;
}

const CircularProductCard: React.FC<CircularProductCardProps> = ({ product }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 border border-green-100">
      <div className="p-5">
        <div className="bg-green-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-3">
          {product.code}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name[language]}
        </h3>
        <p className="text-gray-600 mb-4">{product.description[language]}</p>
        <a
          href={`/circular-plastic/${product.id}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          {language === 'tr' ? 'Detaylar' : language === 'en' ? 'Details' : 'Details'}
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default CircularProductCard;