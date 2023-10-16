import * as React from "react";
import { ThemeProvider as MThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";

export interface ThemeProviderProps {
    children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'),
        defaultTheme = localStorage.getItem("theme") === "dark" || prefersDarkMode ? "dark" : "light",
        theme = React.useMemo(
            () =>
                createTheme({
                    palette: {
                        mode: defaultTheme
                    }
                }),
            [defaultTheme]
        );

    return (
        <MThemeProvider
            theme={theme}
        >
            <CssBaseline />
            <>
                {children}
            </>
        </MThemeProvider>
    )
}

export default ThemeProvider;