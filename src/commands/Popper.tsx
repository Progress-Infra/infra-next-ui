import * as React from "react";
import { Popper as MPopper, PopperProps as MPopperProps } from "@mui/material";

export type PopperProps = MPopperProps;

function Popper({ children, ...others }: PopperProps): JSX.Element {
    return (
        <MPopper
            {...others}
        >
            {children}
        </MPopper>
    )
}

export default Popper;