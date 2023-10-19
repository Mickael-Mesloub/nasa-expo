import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from '../assets/translation/fr.json';
import en from '../assets/translation/en.json';

/**
 * TODO:
 * Add a language switcher on the HomeScreen
 * Complete fr and en json files
 */

const defaultLanguage = 'en';
const languages = ['fr', 'en'];
const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  saveMissing: true, // send not translated keys to endpoint
  debug: false,
  returnNull: false,
  supportedLngs: languages,
  resources,
  react: {
    useSuspense: false,
  },
});

export default i18n;
