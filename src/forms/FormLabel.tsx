import * as React from 'react';
import {
    FormLabel as MFormLabel,
    FormLabelProps as MFormLabelProps
} from '@mui/material';

export type FormLabelProps = MFormLabelProps;

function FormLabel({ children, ...others }: FormLabelProps): JSX.Element {
    return <MFormLabel {...others}>{children}</MFormLabel>;
}

export default FormLabel;
