'use client'
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Импорт файлов переводов
import translationEN from './en/en.json';
import translationRU from './ru/ru.json';
import translationKG from './kg/kg.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  ky: {
    translation: translationKG
  }
};

i18n
  .use(LanguageDetector) // Автоопределение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    resources,
    fallbackLng: 'ru', // Язык по умолчанию
    lng: 'ru', // Начальный язык
    debug: false,
    
    interpolation: {
      escapeValue: false // React уже защищает от XSS
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;