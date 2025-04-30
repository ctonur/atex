import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactContent } from '../data/content';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {contactContent.title[language]}
          </h1>
          <p className="text-xl text-gray-300">
            {language === 'tr' 
              ? 'Bizimle iletişime geçin' 
              : language === 'en' 
                ? 'Get in touch with us' 
                : 'Nehmen Sie Kontakt mit uns auf'}
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'tr' ? 'İletişim Bilgileri' : language === 'en' ? 'Contact Information' : 'Kontaktinformationen'}
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {contactContent.company[language]}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {contactContent.address.label[language]}:
                      </p>
                      <p className="text-gray-600">{contactContent.address.value}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {contactContent.factoryAddress.label[language]}:
                      </p>
                      <p className="text-gray-600">{contactContent.factoryAddress.value}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-0.5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {contactContent.phone.label[language]}:
                      </p>
                      <p className="text-gray-600">{contactContent.phone.value}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-0.5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {contactContent.email.label[language]}:
                      </p>
                      <p className="text-gray-600">{contactContent.email.value}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 mr-3 mt-0.5 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {contactContent.website.label[language]}:
                      </p>
                      <p className="text-gray-600">{contactContent.website.value}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d28.849316500000002!3d41.01224675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbb9c2e5acef%3A0x3d66f9a0454324d7!2sIstanbul%20Organized%20Industrial%20Zone!5e0!3m2!1sen!2str!4v1653661724582!5m2!1sen!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {language === 'tr' ? 'Bize Mesaj Gönderin' : language === 'en' ? 'Send Us a Message' : 'Senden Sie uns eine Nachricht'}
              </h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'tr' ? 'Bizi Ziyaret Edin' : language === 'en' ? 'Visit Us' : 'Besuchen Sie uns'}
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            {language === 'tr' 
              ? 'Ürünlerimiz ve üretim tesislerimiz hakkında daha fazla bilgi edinmek için ofisimizi ziyaret edebilirsiniz.' 
              : language === 'en' 
                ? 'You can visit our office to learn more about our products and production facilities.' 
                : 'Sie können unser Büro besuchen, um mehr über unsere Produkte und Produktionsanlagen zu erfahren.'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;