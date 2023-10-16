import * as React from "react";
import { Link as MLink, LinkProps as MLinkProps } from "@mui/material";

export type LinkProps = MLinkProps;

function Link({ children, ...others }: LinkProps): JSX.Element {
    return (
        <MLink
            {...others}
        >
            {children}
        </MLink>
    )
}

export default Link;