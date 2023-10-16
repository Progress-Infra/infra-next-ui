import * as React from "react";
import { Box as MBox, BoxProps as MBoxProps } from "@mui/material";

export type BoxProps = MBoxProps;

function Box({ children, ...others }: BoxProps): JSX.Element {
    return (
        <MBox
            {...others}
        >
            {children}
        </MBox>
    )
}

export default Box;