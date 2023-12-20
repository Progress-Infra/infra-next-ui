import * as React from 'react';
import { Input as MInput, InputProps as MInputProps } from '@mui/material';

export type InputProps = MInputProps

function Input(props: InputProps): JSX.Element {
    return <MInput {...props} />;
}

export default Input;
