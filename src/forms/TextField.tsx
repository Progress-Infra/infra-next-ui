import * as React from 'react';
import {
    TextField as MTextField,
    TextFieldProps as MTextFieldProps
} from '@mui/material';

export type TextFieldProps = MTextFieldProps;

function TextField({ children, ...others }: TextFieldProps): JSX.Element {
    return <MTextField {...others}>{children}</MTextField>;
}

export default TextField;
