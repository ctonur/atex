import React from 'react';
import { Recycle, Leaf, Factory } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { circularProducts, circularSeries } from '../data/products';
import { circularPlasticContent } from '../data/content';
import CircularProductCard from '../components/CircularProductCard';
import SeriesCard from '../components/SeriesCard';

const CircularPlasticPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-green-800 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">
            {circularPlasticContent.title[language]}
          </h1>
          <p className="text-xl text-green-100">
            {circularPlasticContent.subtitle[language]}
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-4">
              <Recycle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'tr' 
                ? 'Döngüsel Ekonomiye Katkımız' 
                : language === 'en' 
                  ? 'Our Contribution to Circular Economy' 
                  : 'Unser Beitrag zur Kreislaufwirtschaft'}
            </h2>
            <p className="text-gray-600">
              {language === 'tr' 
                ? 'Geri dönüştürülmüş, yeniden formüle edilmiş ve sürdürülebilir mühendislik plastiklerini nitelikli hale getirerek döngüsel ekonomiye katkı sağlıyoruz.' 
                : language === 'en' 
                  ? 'We contribute to the circular economy by enhancing and repurposing recycled, reformulated, and sustainable engineering plastics.' 
                  : 'Wir tragen zur Kreislaufwirtschaft bei, indem wir recycelte, neu formulierte und nachhaltige technische Kunststoffe aufwerten und wiederverwenden.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg border-t-4 border-green-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {language === 'tr' ? 'Geri Dönüşüm' : language === 'en' ? 'Recycling' : 'Recycling'}
              </h3>
              <p className="text-gray-600">
                {language === 'tr' 
                  ? 'Endüstriyel atıkları işleyerek değerli mühendislik plastiklerine dönüştürüyoruz.' 
                  : language === 'en' 
                    ? 'We process industrial waste to transform them into valuable engineering plastics.' 
                    : 'Wir verarbeiten Industrieabfälle, um sie in wertvolle technische Kunststoffe umzuwandeln.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg border-t-4 border-green-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                <Factory className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {language === 'tr' ? 'Yeniden Formülasyon' : language === 'en' ? 'Reformulation' : 'Neuformulierung'}
              </h3>
              <p className="text-gray-600">
                {language === 'tr' 
                  ? 'Geri dönüştürülmüş malzemeleri yenilikçi formülasyonlarla yüksek performanslı kompaundlara dönüştürüyoruz.' 
                  : language === 'en' 
                    ? 'We transform recycled materials into high-performance compounds with innovative formulations.' 
                    : 'Wir verwandeln recycelte Materialien mit innovativen Formulierungen in leistungsstarke Compounds.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg border-t-4 border-green-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {language === 'tr' ? 'Sürdürülebilirlik' : language === 'en' ? 'Sustainability' : 'Nachhaltigkeit'}
              </h3>
              <p className="text-gray-600">
                {language === 'tr' 
                  ? 'Karbon ayak izini azaltan ve doğal kaynakları koruyan sürdürülebilir çözümler geliştiriyoruz.' 
                  : language === 'en' 
                    ? 'We develop sustainable solutions that reduce carbon footprint and conserve natural resources.' 
                    : 'Wir entwickeln nachhaltige Lösungen, die den CO2-Fußabdruck reduzieren und natürliche Ressourcen schonen.'}
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {language === 'tr' ? 'CYLRE® Ürün Serisi' : language === 'en' ? 'CYLRE® Product Series' : 'CYLRE® Produktserie'}
            </h3>
            <p className="text-gray-600 mb-8">
              {circularPlasticContent.seriesTitle[language]}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {circularProducts.map((product) => (
              <CircularProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'tr' ? 'CYLRE® Uygulama Serileri' : language === 'en' ? 'CYLRE® Application Series' : 'CYLRE® Anwendungsserien'}
            </h2>
            <p className="text-gray-600">
              {language === 'tr' 
                ? 'Farklı sektörlerin özel ihtiyaçlarına göre tasarlanmış geri dönüştürülmüş teknik kompaund serileri.' 
                : language === 'en' 
                  ? 'Recycled technical compound series designed for the specific needs of different industries.' 
                  : 'Recycelte technische Compound-Serien, die für die spezifischen Bedürfnisse verschiedener Branchen entwickelt wurden.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {circularSeries.map((series) => (
              <SeriesCard key={series.id} series={series} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CircularPlasticPage;