import * as React from "react";
import { InputAdornment as MInputAdornment, InputAdornmentProps as MInputAdornmentProps } from "@mui/material";

export type InputAdornmentProps = MInputAdornmentProps;

function InputAdornment({ children, ...others }: InputAdornmentProps): JSX.Element {
    return (
        <MInputAdornment
            {...others}
        >
            {children}
        </MInputAdornment>
    )
}

export default InputAdornment;