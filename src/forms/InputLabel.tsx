import * as React from 'react';
import {
    InputLabel as MInputLabel,
    InputLabelProps as MInputLabelProps
} from '@mui/material';

export type InputLabelProps = MInputLabelProps;

function InputLabel({ children, ...others }: InputLabelProps): JSX.Element {
    return <MInputLabel {...others}>{children}</MInputLabel>;
}

export default InputLabel;
