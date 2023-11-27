import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const languages = [
    {
        code: "en",
        name: "English"
    },
    {
        code: "es",
        name: "Español"
    },
    {
        code: "fr",
        name: "Français"
    },
    {
        code: "it",
        name: "Italiano"
    },
    {
        code: "ja",
        name: "日本の"
    },
    {
        code: "zh_CN",
        name: "简体中文）"
    },
    {
        code: "zh_TW",
        name: "中國傳統的）"
    }
];

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: process.env.NODE_ENV === "development",
        defaultNS: "common",
        fallbackLng: "en",
        ns: "common",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;