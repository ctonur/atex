import { NavItem } from '../types';

export const navItems: NavItem[] = [
  {
    label: {
      tr: 'Ana Sayfa',
      en: 'Home',
      de: 'Startseite'
    },
    href: '/'
  },
  {
    label: {
      tr: 'Hakkımızda',
      en: 'About Us',
      de: 'Über Uns'
    },
    href: '/about'
  },
  {
    label: {
      tr: 'Mühendislik Kompaundları',
      en: 'Engineered Compounds',
      de: 'Technische Compounds'
    },
    href: '/engineered-compounds'
  },
  {
    label: {
      tr: 'Döngüsel Plastik',
      en: 'Circular Plastic',
      de: 'Kreislauf-Kunststoffe'
    },
    href: '/circular-plastic'
  },
  {
    label: {
      tr: 'İletişim',
      en: 'Contact',
      de: 'Kontakt'
    },
    href: '/contact'
  }
];