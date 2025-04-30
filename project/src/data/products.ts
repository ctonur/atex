import { Product, CircularProduct, CircularSeries } from '../types';

export const engineeredProducts: Product[] = [
  {
    id: 'gl-ex',
    name: 'GL-EX',
    description: {
      tr: 'Cam Elyaf Takviyeli Plastik Kompoundlar',
      en: 'Glass Fiber Reinforced Compounds',
      de: 'Glasfaserverstärkte Compounds'
    },
    imageUrl: '/images/products/gl-ex.jpg'
  },
  {
    id: 'ml-ex',
    name: 'ML-EX',
    description: {
      tr: 'Mineral Takviyeli Plastik Kompoundlar',
      en: 'Mineral Reinforced Compounds',
      de: 'Mineralverstärkte Compounds'
    },
    imageUrl: '/images/products/ml-ex.jpg'
  },
  {
    id: 'fr-ex',
    name: 'FR-EX',
    description: {
      tr: 'Alev geciktirici (FR) Plastik Kompoundlar',
      en: 'Flame Retardant Compounds & Masterbatches',
      de: 'Flammhemmende Compounds & Masterbatches'
    },
    imageUrl: '/images/products/fr-ex.jpg'
  },
  {
    id: 'venamid',
    name: 'VENAMID',
    description: {
      tr: 'Polyamid Kompoundlar',
      en: 'Polyamide Compounds',
      de: 'Polyamid-Compounds'
    },
    imageUrl: '/images/products/venamid.jpg'
  },
  {
    id: 'nadvin',
    name: 'NADVIN',
    description: {
      tr: 'Plastikler için Katkı ve Masterbatch',
      en: 'High Performance Additives & Masterbathes',
      de: 'Hochleistungsadditive & Masterbatches'
    },
    imageUrl: '/images/products/nadvin.jpg'
  }
];

export const circularProducts: CircularProduct[] = [
  {
    id: 'cylre-101',
    code: 'CYLRE 101',
    name: {
      tr: 'PC kompaundlar',
      en: 'PC compounds',
      de: 'PC Compounds'
    },
    description: {
      tr: 'Yüksek performanslı geri dönüştürülmüş PC kompaundlar',
      en: 'High-performance recycled PC compounds',
      de: 'Hochleistungsfähige recycelte PC-Compounds'
    }
  },
  {
    id: 'cylre-303',
    code: 'CYLRE 303',
    name: {
      tr: 'ABS ve PS kompaundlar',
      en: 'ABS & PS compounds',
      de: 'ABS & PS Compounds'
    },
    description: {
      tr: 'Geri dönüştürülmüş ABS ve PS bazlı kompaundlar',
      en: 'Recycled ABS and PS based compounds',
      de: 'Recycelte ABS- und PS-basierte Compounds'
    }
  },
  {
    id: 'cylre-505',
    code: 'CYLRE 505',
    name: {
      tr: 'PC/ABS kompaundlar',
      en: 'PC/ABS compounds',
      de: 'PC/ABS Compounds'
    },
    description: {
      tr: 'Geri dönüştürülmüş PC/ABS karışım kompaundlar',
      en: 'Recycled PC/ABS blend compounds',
      de: 'Recycelte PC/ABS-Mischverbindungen'
    }
  },
  {
    id: 'cylre-707',
    code: 'CYLRE 707',
    name: {
      tr: 'PP kompaundlar',
      en: 'PP compounds',
      de: 'PP Compounds'
    },
    description: {
      tr: 'Geri dönüştürülmüş PP bazlı kompaundlar',
      en: 'Recycled PP based compounds',
      de: 'Recycelte PP-basierte Compounds'
    }
  },
  {
    id: 'cylre-909',
    code: 'CYLRE 909',
    name: {
      tr: 'PA kompaundlar',
      en: 'PA compounds',
      de: 'PA Compounds'
    },
    description: {
      tr: 'Geri dönüştürülmüş PA bazlı kompaundlar',
      en: 'Recycled PA based compounds',
      de: 'Recycelte PA-basierte Compounds'
    }
  }
];

export const circularSeries: CircularSeries[] = [
  {
    id: 'cylre-e',
    code: 'CYLRE-E™',
    name: {
      tr: 'Elektrik & Elektronik Uygulamalar için Geri Dönüştürülmüş Teknik Kompaundlar',
      en: 'Recycled Technical Compounds for Electrical & Electronic Applications',
      de: 'Recycelte technische Compounds für Elektro- und Elektronikanwendungen'
    },
    description: {
      tr: 'Alev geciktirici (halojensiz ve halojenli seçenekler), yüksek izolasyon direnci, RoHS ve REACH uyumlu',
      en: 'Flame retardant (halogen-free and halogenated options), high insulation resistance, RoHS and REACH compliant',
      de: 'Flammhemmend (halogenfreie und halogenhaltige Optionen), hoher Isolationswiderstand, RoHS- und REACH-konform'
    },
    applications: ['Switch', 'Socket', 'Cable duct', 'Electronic housing']
  },
  {
    id: 'cylre-a',
    code: 'CYLRE-A™',
    name: {
      tr: 'Otomotiv Endüstrisi için Yüksek Performanslı Geri Dönüşüm Kompaundları',
      en: 'High-Performance Recycling Compounds for the Automotive Industry',
      de: 'Hochleistungs-Recycling-Compounds für die Automobilindustrie'
    },
    description: {
      tr: 'Isıya dayanıklı ve darbe dirençli, renk kararlılığı yüksek, düşük VOC emisyonu',
      en: 'Heat resistant and impact resistant, high color stability, low VOC emission',
      de: 'Hitzebeständig und schlagfest, hohe Farbstabilität, geringe VOC-Emission'
    },
    applications: ['Interior trim parts', 'Body supports', 'Under-hood parts']
  },
  {
    id: 'cylre-t',
    code: 'CYLRE-T™',
    name: {
      tr: 'Tüketim Ürünleri ve Beyaz Eşya için Fonksiyonel Geri Dönüşüm Çözümleri',
      en: 'Functional Recycling Solutions for Consumer Products and White Goods',
      de: 'Funktionelle Recyclinglösungen für Konsumgüter und Haushaltsgeräte'
    },
    description: {
      tr: 'Estetik yüzey kalitesi, kolay işlenebilirlik, gıda teması uygun varyantlar',
      en: 'Aesthetic surface quality, easy processability, food contact suitable variants',
      de: 'Ästhetische Oberflächenqualität, leichte Verarbeitbarkeit, lebensmittelkontaktgeeignete Varianten'
    },
    applications: ['Washing/dishwashing machines', 'Home appliances', 'Heaters', 'Kitchen products']
  },
  {
    id: 'cylre-i',
    code: 'CYLRE-I™',
    name: {
      tr: 'Endüstriyel Uygulamalara Yönelik Teknik Geri Dönüşüm Kompaundları',
      en: 'Technical Recycling Compounds for Industrial Applications',
      de: 'Technische Recycling-Compounds für industrielle Anwendungen'
    },
    description: {
      tr: 'Mekanik mukavemeti yüksek, kimyasal dirençli, uzun ömürlü ve zorlu koşullara uygun',
      en: 'High mechanical strength, chemical resistant, long-lasting and suitable for harsh conditions',
      de: 'Hohe mechanische Festigkeit, chemikalienbeständig, langlebig und für raue Bedingungen geeignet'
    },
    applications: ['Machine parts', 'Industrial covers', 'Technical housings']
  },
  {
    id: 'cylre-b',
    code: 'CYLRE-B™',
    name: {
      tr: 'Bina & Yapı Sektörü için Sürdürülebilir Kompaundlar',
      en: 'Sustainable Compounds for the Building & Construction Sector',
      de: 'Nachhaltige Compounds für den Bau- und Konstruktionssektor'
    },
    description: {
      tr: 'UV dayanımı, yangın dayanımı, stabil yapı ve düşük termal genleşme',
      en: 'UV resistance, fire resistance, stable structure and low thermal expansion',
      de: 'UV-Beständigkeit, Feuerbeständigkeit, stabile Struktur und geringe thermische Ausdehnung'
    },
    applications: ['Facade cladding', 'Duct systems', 'Building elements']
  },
  {
    id: 'cylre-c',
    code: 'CYLRE-C™',
    name: {
      tr: 'Müşteriye Özel Tasarlanmış Kompaund Çözümleri',
      en: 'Custom Designed Compound Solutions',
      de: 'Maßgeschneiderte Compound-Lösungen'
    },
    description: {
      tr: 'Proje bazlı geliştirme, özel katkı sistemleri, renk, performans ve fiyat optimizasyonu',
      en: 'Project-based development, special additive systems, color, performance and price optimization',
      de: 'Projektbasierte Entwicklung, spezielle Additivsysteme, Farb-, Leistungs- und Preisoptimierung'
    },
    applications: ['All sectors with custom needs']
  }
];