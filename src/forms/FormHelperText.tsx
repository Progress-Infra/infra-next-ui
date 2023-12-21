import * as React from 'react';
import {
    FormHelperText as MFormHelperText,
    FormHelperTextProps as MFormHelperTextProps
} from '@mui/material';

export type FormHelperTextProps = MFormHelperTextProps;

function FormHelperText({
    children,
    ...others
}: FormHelperTextProps): JSX.Element {
    return <MFormHelperText {...others}>{children}</MFormHelperText>;
}

export default FormHelperText;
