import * as React from "react";
import ThemeProvider from "./ThemeProvider";
import "./i18n";
import { CircularProgress } from "@mui/material";

export interface NuiRootProps {
    children?: React.ReactNode
}

function NuiRoot({ children }: NuiRootProps) {
    return (
        <React.Suspense
            fallback={<CircularProgress />}
        >
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </React.Suspense>
    )
}

export default NuiRoot;