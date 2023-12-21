import * as React from 'react';
import {
    LocalizationProvider as MLocalizationProvider,
    LocalizationProviderProps as MLocalizationProviderProps
} from '@mui/x-date-pickers';

export type LocalizationProviderProps<TDate, TLocale> =
    MLocalizationProviderProps<TDate, TLocale>;

function LocalizationProvider<TDate, TLocale>({
    children,
    ...others
}: LocalizationProviderProps<TDate, TLocale>): JSX.Element {
    return (
        <MLocalizationProvider {...others}>{children}</MLocalizationProvider>
    );
}

export default LocalizationProvider;
