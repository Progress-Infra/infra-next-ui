import * as React from 'react';
import {
    FormControl as MFormControl,
    FormControlProps as MFormControlProps
} from '@mui/material';

export type FormControlProps = MFormControlProps;

function FormControl({ children, ...others }: FormControlProps): JSX.Element {
    return <MFormControl {...others}>{children}</MFormControl>;
}

export default FormControl;
