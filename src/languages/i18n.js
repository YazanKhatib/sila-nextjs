import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
import en from './en.json';
import ar from './ar.json';

const resources = {
    en: { translation: en },
    ar: { translation: ar }
};

const lang = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : 'en';
let defaultLang = 'en'
if (lang && lang === 'ar') {
    defaultLang = 'ar';
    typeof window !== 'undefined' && window.document.body.classList.add('rtl')
}

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLang,
        debug: true,
        interpolation: { escapeValue: false}
    });


export default i18n;