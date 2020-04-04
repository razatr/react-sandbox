import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vocabulary from './vocabulary.json'

i18n
    .use(initReactI18next) // if not using I18nextProvider
    .init({
        fallbackLng: 'ru',
        lng: "ru",
        debug: true,
        resources: vocabulary,

        // react i18next special options (optional)
        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    });


export default i18n;