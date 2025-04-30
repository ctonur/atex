import React from 'react';
import { CheckCircle as CircleCheck, BarChart3, Recycle } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { useLanguage } from '../context/LanguageContext';

const HomePage: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <CircleCheck className="h-8 w-8 text-primary-600" />,
      title: {
        tr: 'Yüksek Kalite',
        en: 'High Quality',
        de: 'Hohe Qualität'
      },
      description: {
        tr: 'Uluslararası standartlara uygun yüksek kaliteli ürünler',
        en: 'High-quality products compliant with international standards',
        de: 'Hochwertige Produkte, die internationalen Standards entsprechen'
      }
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      title: {
        tr: 'İnovasyon',
        en: 'Innovation',
        de: 'Innovation'
      },
      description: {
        tr: 'Sürekli Ar-Ge çalışmaları ile yenilikçi ürün geliştirme',
        en: 'Innovative product development with continuous R&D activities',
        de: 'Innovative Produktentwicklung mit kontinuierlichen F&E-Aktivitäten'
      }
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary-600" />,
      title: {
        tr: 'Sürdürülebilirlik',
        en: 'Sustainability',
        de: 'Nachhaltigkeit'
      },
      description: {
        tr: 'Çevre dostu süreçler ve döngüsel ekonomiye katkı',
        en: 'Environmentally friendly processes and contribution to circular economy',
        de: 'Umweltfreundliche Prozesse und Beitrag zur Kreislaufwirtschaft'
      }
    }
  ];

  return (
    <div>
      <HeroSlider />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'tr' 
                ? 'Mühendislik Plastiklerinde Uzman' 
                : language === 'en' 
                  ? 'Expert in Engineering Plastics' 
                  : 'Experte für technische Kunststoffe'}
            </h2>
            <p className="text-gray-600">
              {language === 'tr' 
                ? 'ATEX Plastik olarak, mühendislik plastiklerinin işlenmesi, kompaundlanması ve geri dönüştürülmesi alanında yenilikçi çözümler sunuyoruz.' 
                : language === 'en' 
                  ? 'At ATEX Plastik, we offer innovative solutions in the processing, compounding, and recycling of engineering plastics.' 
                  : 'Bei ATEX Plastik bieten wir innovative Lösungen bei der Verarbeitung, dem Compounding und dem Recycling von technischen Kunststoffen.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title[language]}</h3>
                <p className="text-gray-600">{feature.description[language]}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md text-sm font-medium shadow-md transition-colors"
            >
              {language === 'tr' ? 'İletişime Geçin' : language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Manufacturing" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {language === 'tr' 
                  ? 'Neden ATEX Plastik?' 
                  : language === 'en' 
                    ? 'Why ATEX Plastik?' 
                    : 'Warum ATEX Plastik?'}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === 'tr' 
                  ? 'Modern ekstruder sistemleri ve firmamıza özgü geliştirdiğimiz know-how sayesinde, elektrik, beyaz eşya ve otomotiv gibi sektörlere kendi markamız altında yüksek performanslı plastik hammadde ve kompaund çözümleri sunuyoruz.' 
                  : language === 'en' 
                    ? 'With modern extruder systems and proprietary know-how, we provide high-performance plastic raw materials and compound solutions under our own brand for key industries such as electrical, home appliances, and automotive.' 
                    : 'Mit modernen Extrusionsanlagen und firmeneigenem Know-how bieten wir unter unserer eigenen Marke leistungsstarke Kunststoffrohstoffe und Compound-Lösungen für Schlüsselbranchen wie Elektrotechnik, Haushaltsgeräte und Automobilindustrie an.'}
              </p>
              <p className="text-gray-600 mb-6">
                {language === 'tr' 
                  ? 'Sadece birincil kalite ürünlerle değil; aynı zamanda geri dönüştürülmüş, yeniden formüle edilmiş ve sürdürülebilir mühendislik plastiklerini de nitelikli hale getirerek döngüsel ekonomiye katkı sağlıyoruz.' 
                  : language === 'en' 
                    ? 'Beyond prime-grade materials, we also focus on enhancing and repurposing recycled, reformulated, and sustainable secondary engineering plastics—contributing to the circular economy.' 
                    : 'Neben hochwertigen Primärmaterialien konzentrieren wir uns auch auf die Verbesserung und Wiederverwendung von recycelten, neu formulierten und nachhaltigen sekundären technischen Kunststoffen und leisten so einen Beitrag zur Kreislaufwirtschaft.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/about" 
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-colors"
                >
                  {language === 'tr' ? 'Hakkımızda' : language === 'en' ? 'About Us' : 'Über Uns'}
                </a>
                <a 
                  href="/engineered-compounds" 
                  className="inline-block bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-colors"
                >
                  {language === 'tr' ? 'Ürünlerimiz' : language === 'en' ? 'Our Products' : 'Unsere Produkte'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;