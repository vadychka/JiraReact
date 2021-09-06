import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'


export const defaultNS = 'en'
export const resources = {
  en: { en }, ru: { ru }
}
i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    whitelist: ['en', 'ru'],
    defaultNS,
    resources,
    interpolation: { escapeValue: false }
  })

export default i18n