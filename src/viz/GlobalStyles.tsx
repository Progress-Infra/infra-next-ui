import * as React from 'react';
import {
    GlobalStyles as MGlobalStyles,
    GlobalStylesProps as MGlobalStylesProps
} from '@mui/material';

export type GlobalStylesProps = MGlobalStylesProps;

function GlobalStyles(props: GlobalStylesProps): JSX.Element {
    return <MGlobalStyles {...props} />;
}

export default GlobalStyles;
