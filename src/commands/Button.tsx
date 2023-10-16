import * as React from "react";
import { Button as MButton, ButtonProps as MButtonProps } from "@mui/material";

export type ButtonProps = MButtonProps;

function Button({ children, ...others }: ButtonProps): JSX.Element {
    return (
        <MButton
            {...others}
        >
            {children}
        </MButton>
    )
}

export default Button;