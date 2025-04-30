import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { engineeredProducts } from '../data/products';
import { engineeredCompoundsContent } from '../data/content';
import ProductCard from '../components/ProductCard';

const EngineeredCompoundsPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">
            {engineeredCompoundsContent.title[language]}
          </h1>
          <p className="text-xl text-gray-300">
            {engineeredCompoundsContent.subtitle[language]}
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'tr' 
                ? 'Ürün Portföyümüz' 
                : language === 'en' 
                  ? 'Our Product Portfolio' 
                  : 'Unser Produktportfolio'}
            </h2>
            <p className="text-gray-600">
              {language === 'tr' 
                ? 'Modern ekstruder sistemleri ve özgün know-how ile geliştirdiğimiz yüksek kaliteli mühendislik kompaundları.' 
                : language === 'en' 
                  ? 'High-quality engineering compounds developed with modern extruder systems and unique know-how.' 
                  : 'Hochwertige technische Compounds, die mit modernen Extrusionssystemen und einzigartigem Know-how entwickelt wurden.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {language === 'tr' 
                  ? 'Özel Mühendislik Çözümleri' 
                  : language === 'en' 
                    ? 'Custom Engineering Solutions' 
                    : 'Maßgeschneiderte Engineering-Lösungen'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'tr' 
                  ? 'Müşterilerimizin özel ihtiyaçlarına yönelik tasarlanmış yüksek performanslı mühendislik kompaundları ve masterbatch çözümleri sunuyoruz.' 
                  : language === 'en' 
                    ? 'We offer high-performance engineering compounds and masterbatch solutions designed for the specific needs of our customers.' 
                    : 'Wir bieten leistungsstarke technische Compounds und Masterbatch-Lösungen, die für die spezifischen Anforderungen unserer Kunden entwickelt wurden.'}
              </p>
              <p className="text-gray-600 mb-6">
                {language === 'tr' 
                  ? 'Deneyimli Ar-Ge ekibimiz, müşterilerimizin zorlu uygulamaları için inovatif çözümler geliştirmek üzere sürekli çalışmaktadır.' 
                  : language === 'en' 
                    ? 'Our experienced R&D team is constantly working to develop innovative solutions for our customers\' challenging applications.' 
                    : 'Unser erfahrenes F&E-Team arbeitet ständig daran, innovative Lösungen für die anspruchsvollen Anwendungen unserer Kunden zu entwickeln.'}
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md text-sm font-medium shadow-md transition-colors"
              >
                {language === 'tr' ? 'İletişime Geçin' : language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8850709/pexels-photo-8850709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Engineering Lab" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeredCompoundsPage;