import * as React from "react";
import "./i18n";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { languages } from "./i18n";

function I18nInit() {
    const { i18n } = useTranslation();

    React.useEffect(() => {
        if (i18n) {
            const lng = languages.find(l => (
                l.code === i18n.language ||
                l.code === i18n.language.split("-")[0] ||
                l.code === i18n.language.split("_")[0]
            ))

            if (lng?.code !== i18n.language) {
                i18n.changeLanguage(lng?.code || "en");
            }
        }
    }, [i18n]);

    return (
        <>
            <React.Suspense
                fallback={<CircularProgress />}
            >
                <></>
            </React.Suspense>
        </>
    )
}

export default I18nInit;