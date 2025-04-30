import React from 'react';
import { FileText, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { privacyContent } from '../data/content';

const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">
            {privacyContent.title[language]}
          </h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {privacyContent.title[language]}
              </h2>
              <a 
                href="#"
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                {privacyContent.downloadText[language]}
              </a>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                {language === 'tr' 
                  ? 'Bu Kişisel Verilerin Korunması Politikası ("Politika"), ATEX Plastik Sanayi ve Ticaret Ltd Şti. ("ATEX Plastik" veya "Şirket") tarafından işlenen kişisel verilerin korunmasına ilişkin ilke ve esasları belirlemektedir.' 
                  : language === 'en' 
                    ? 'This Privacy Policy ("Policy") sets out the principles and procedures for the protection of personal data processed by ATEX Plastik Industry and Trade Ltd. Co. ("ATEX Plastik" or the "Company").' 
                    : 'Diese Datenschutzrichtlinie ("Richtlinie") legt die Grundsätze und Verfahren zum Schutz personenbezogener Daten fest, die von der ATEX Plastik Industrie und Handel GmbH ("ATEX Plastik" oder das "Unternehmen") verarbeitet werden.'}
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">
                {language === 'tr' ? '1. Kişisel Verilerin İşlenmesi İlkeleri' : language === 'en' ? '1. Principles of Processing Personal Data' : '1. Grundsätze der Verarbeitung personenbezogener Daten'}
              </h3>
              <p className="mb-4">
                {language === 'tr' 
                  ? 'ATEX Plastik, kişisel verileri işlerken aşağıdaki ilkelere uygun hareket etmektedir:' 
                  : language === 'en' 
                    ? 'ATEX Plastik acts in accordance with the following principles when processing personal data:' 
                    : 'ATEX Plastik handelt bei der Verarbeitung personenbezogener Daten nach folgenden Grundsätzen:'}
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">
                  {language === 'tr' 
                    ? 'Hukuka ve dürüstlük kurallarına uygun olma' 
                    : language === 'en' 
                      ? 'Compliance with law and good faith' 
                      : 'Einhaltung von Recht und Treu und Glauben'}
                </li>
                <li className="mb-2">
                  {language === 'tr' 
                    ? 'Doğru ve gerektiğinde güncel olma' 
                    : language === 'en' 
                      ? 'Being accurate and up-to-date when necessary' 
                      : 'Korrekt und bei Bedarf aktuell sein'}
                </li>
                <li className="mb-2">
                  {language === 'tr' 
                    ? 'Belirli, açık ve meşru amaçlar için işlenme' 
                    : language === 'en' 
                      ? 'Processing for specific, explicit and legitimate purposes' 
                      : 'Verarbeitung für bestimmte, eindeutige und rechtmäßige Zwecke'}
                </li>
                <li className="mb-2">
                  {language === 'tr' 
                    ? 'İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma' 
                    : language === 'en' 
                      ? 'Being relevant, limited and proportionate to the purpose for which they are processed' 
                      : 'Relevant, begrenzt und verhältnismäßig zu dem Zweck, für den sie verarbeitet werden'}
                </li>
                <li>
                  {language === 'tr' 
                    ? 'İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme' 
                    : language === 'en' 
                      ? 'Being retained for the period stipulated in the relevant legislation or required for the purpose for which they are processed' 
                      : 'Aufbewahrung für den in den einschlägigen Rechtsvorschriften vorgesehenen Zeitraum oder für den Zweck, für den sie verarbeitet werden'}
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">
                {language === 'tr' ? '2. Kişisel Verilerin İşlenme Amaçları' : language === 'en' ? '2. Purposes of Processing Personal Data' : '2. Zwecke der Verarbeitung personenbezogener Daten'}
              </h3>
              <p className="mb-4">
                {language === 'tr' 
                  ? 'ATEX Plastik, kişisel verileri aşağıdaki amaçlar doğrultusunda işlemektedir:' 
                  : language === 'en' 
                    ? 'ATEX Plastik processes personal data for the following purposes:' 
                    : 'ATEX Plastik verarbeitet personenbezogene Daten für folgende Zwecke:'}
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">
                {language === 'tr' ? '3. İlgili Kişinin Hakları' : language === 'en' ? '3. Rights of the Data Subject' : '3. Rechte der betroffenen Person'}
              </h3>
              <p className="mb-4">
                {language === 'tr' 
                  ? 'İlgili kişi, ATEX Plastik\'e başvurarak aşağıdaki haklarını kullanabilir:' 
                  : language === 'en' 
                    ? 'The data subject may exercise the following rights by applying to ATEX Plastik:' 
                    : 'Die betroffene Person kann die folgenden Rechte ausüben, indem sie sich an ATEX Plastik wendet:'}
              </p>
              
              <p className="mt-8 text-sm text-gray-500">
                {language === 'tr' 
                  ? 'Son Güncelleme Tarihi: Haziran 2023' 
                  : language === 'en' 
                    ? 'Last Updated: June 2023' 
                    : 'Zuletzt aktualisiert: Juni 2023'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;