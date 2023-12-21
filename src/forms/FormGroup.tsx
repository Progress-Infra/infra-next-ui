import * as React from 'react';
import {
    FormGroup as MFormGroup,
    FormGroupProps as MFormGroupProps
} from '@mui/material';

export type FormGroupProps = MFormGroupProps;

function FormGroup({ children, ...others }: FormGroupProps): JSX.Element {
    return <MFormGroup {...others}>{children}</MFormGroup>;
}

export default FormGroup;
