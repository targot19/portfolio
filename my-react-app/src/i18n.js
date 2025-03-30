import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
 .use(initReactI18next)
 .init({
  backend: {
   // translation file path
   loadPath: "/locales/{{lng}}.json",
  },
  lng: "en",
  fallbackLng: "en",
  // please disable debug in production
  debug: false,
  //ns means namespace. It is used to group translations into different files.
  // can have multiple namespaces, in case you want to divide a huge
  // translation into smaller pieces and load them on demand
  interpolation: {
    escapeValue: false, // Corrected typo
    formatSeparator: ",",
  },
  react: {
   wait: true,
  },
 });
export default i18n;