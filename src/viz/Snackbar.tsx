import * as React from 'react';
import {
    Snackbar as MSnackbar,
    SnackbarProps as MSnackbarProps
} from '@mui/material';

export type SnackbarProps = MSnackbarProps

function Snackbar({ children, ...others }: SnackbarProps): JSX.Element {
    return <MSnackbar {...others}>{children}</MSnackbar>;
}

export default Snackbar;
