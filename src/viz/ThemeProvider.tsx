import * as React from 'react';
import {
    ThemeProvider as MThemeProvider,
    createTheme
} from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { brandColor } from './ThemeConstants';

export const ThemeModeContext = React.createContext({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    setThemeMode: (mode: 'dark' | 'light') => {}
});

export interface ThemeProviderProps {
    children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'),
        defaultMode =
            localStorage.getItem('nui.theme') === 'light'
                ? 'light'
                : localStorage.getItem('nui.theme') === 'dark'
                  ? 'dark'
                  : prefersDarkMode
                    ? 'dark'
                    : 'light',
        [mode, setMode] = React.useState<'dark' | 'light'>(defaultMode),
        themeMode = React.useMemo(
            () => ({
                setThemeMode: (mode: 'light' | 'dark') => {
                    setMode(mode);
                    localStorage.setItem('nui.theme', mode);
                }
            }),
            []
        ),
        theme = React.useMemo(
            () =>
                createTheme({
                    components: {
                        MuiButton: {
                            styleOverrides: {
                                root: {
                                    textTransform: 'none'
                                }
                            }
                        }
                    },
                    palette: {
                        mode: mode,
                        ...(mode === 'dark'
                            ? {
                                  primary: {
                                      main: brandColor[50]
                                  },
                                  secondary: {
                                      main: '#FFF'
                                  }
                              }
                            : {
                                  primary: {
                                      main: brandColor[100]
                                  },
                                  secondary: {
                                      main: '#000'
                                  }
                              })
                    },
                    typography: {
                        fontFamily: 'Source Sans Pro'
                    }
                }),
            [mode]
        );

    return (
        <ThemeModeContext.Provider value={themeMode}>
            <MThemeProvider theme={theme}>
                <CssBaseline />
                <>{children}</>
            </MThemeProvider>
        </ThemeModeContext.Provider>
    );
}

export default ThemeProvider;
