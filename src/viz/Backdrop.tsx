import * as React from "react";
import { Backdrop as MBackdrop, BackdropProps as MBackdropProps } from "@mui/material";

export type BackdropProps = MBackdropProps;

function Backdrop({ children, ...others }: BackdropProps): JSX.Element {
    return (
        <MBackdrop
            {...others}
        >
            {children}
        </MBackdrop>
    )
}

export default Backdrop;