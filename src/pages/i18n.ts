import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import companiesEn from '../locales/en/companies.json';
import contactEn from '../locales/en/contact.json';
import heroEn from '../locales/en/hero.json';
import companiesEs from '../locales/es/companies.json';
import contactEs from '../locales/es/contact.json';
import heroEs from '../locales/es/hero.json';

const resources = {
  en: {
    hero: heroEn,
    companies: companiesEn,
    contact: contactEn,
  },
  es: {
    hero: heroEs,
    companies: companiesEs,
    contact: contactEs,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
