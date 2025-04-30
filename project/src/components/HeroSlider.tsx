import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { homeContent } from '../data/content';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1400',
    content: homeContent.hero
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1400',
    content: {
      tr: 'Yüksek kaliteli mühendislik plastikleri ve kompaundları',
      en: 'High-quality engineering plastics and compounds',
      de: 'Hochwertige technische Kunststoffe und Compounds'
    }
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3846503/pexels-photo-3846503.jpeg?auto=compress&cs=tinysrgb&w=1400',
    content: {
      tr: 'Sürdürülebilir ve döngüsel ekonomiye katkı sağlayan çözümler',
      en: 'Solutions contributing to sustainable and circular economy',
      de: 'Lösungen, die zu einer nachhaltigen und kreislauforientierten Wirtschaft beitragen'
    }
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl mx-auto">
                {slide.content[language]}
              </h1>
              {index === 0 && (
                <p className="text-white text-sm md:text-lg max-w-2xl mx-auto mt-4">
                  {homeContent.intro[language]}
                </p>
              )}
              <div className="mt-8">
                <a
                  href="/about"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md text-sm font-medium shadow-lg transition-all mx-2"
                >
                  {language === 'tr' ? 'Hakkımızda' : language === 'en' ? 'About Us' : 'Über Uns'}
                </a>
                <a
                  href="/engineered-compounds"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-md text-sm font-medium shadow-lg transition-all mx-2"
                >
                  {language === 'tr' ? 'Ürünlerimiz' : language === 'en' ? 'Our Products' : 'Unsere Produkte'}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;