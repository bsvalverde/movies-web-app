import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import pt_br from './locales/pt-br/translation.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: en
      },
      "pt-BR": {
        translation: pt_br
      }
    }
  });

export default i18n;
