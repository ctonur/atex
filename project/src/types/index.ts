export type Language = 'tr' | 'en' | 'de';

export interface NavItem {
  label: {
    tr: string;
    en: string;
    de: string;
  };
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: {
    tr: string;
    en: string;
    de: string;
  };
  imageUrl: string;
}

export interface CircularProduct {
  id: string;
  code: string;
  name: {
    tr: string;
    en: string;
    de: string;
  };
  description: {
    tr: string;
    en: string;
    de: string;
  };
}

export interface CircularSeries {
  id: string;
  code: string;
  name: {
    tr: string;
    en: string;
    de: string;
  };
  description: {
    tr: string;
    en: string;
    de: string;
  };
  applications: string[];
}