import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend"
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en/translation.json'
import ru from '../../public/locales/ru/translation.json'


export const defaultNS = 'en'
export const resources = {
  en: {
    en,
    ru,
  },
} as const;

i18n.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    whitelist: ['en', 'ru'],
    debug: false,
    defaultNS,
    resources,
  })

// export default i18n