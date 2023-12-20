import * as React from 'react';
import ThemeProvider from './ThemeProvider';
import I18nInit from './I18nInit';

export interface NuiRootProps {
    children?: React.ReactNode;
}

function NuiRoot({ children }: NuiRootProps) {
    return (
        <>
            <I18nInit />
            <ThemeProvider>{children}</ThemeProvider>
        </>
    );
}

export default NuiRoot;
