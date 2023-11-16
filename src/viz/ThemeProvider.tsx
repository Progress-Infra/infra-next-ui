import * as React from "react";
import { ThemeProvider as MThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { brandColor } from "./ThemeConstants";

export interface ThemeProviderProps {
    children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'),
        defaultTheme = localStorage.getItem("nui.theme") === "dark" || prefersDarkMode ? "dark" : "light",
        theme = React.useMemo(
            () =>
                createTheme({
                    components: {
                        MuiButton: {
                            styleOverrides: {
                                root: {
                                    textTransform: "none"
                                }
                            }
                        }
                    },
                    palette: {
                        mode: defaultTheme,
                        ...(
                            defaultTheme === "dark" ?
                                {
                                    primary: {
                                        main: brandColor[50]
                                    }
                                } :
                                {
                                    primary: {
                                        main: brandColor[100]
                                    }
                                }
                        )
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