import * as React from "react";
import { GlobalStyles as MGlobalStyles, GlobalStylesProps as MGlobalStylesProps } from "@mui/material";

export interface GlobalStylesProps extends MGlobalStylesProps { }

function GlobalStyles(props: GlobalStylesProps): JSX.Element {
    return (
        <MGlobalStyles
            {...props}
        />
    )
}

export default GlobalStyles;