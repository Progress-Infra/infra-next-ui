import * as React from "react";
import { ScopedCssBaseline as MScopedCssBaseline, ScopedCssBaselineProps as MScopedCssBaselineProps } from "@mui/material";

export type ScopedCssBaselineProps = MScopedCssBaselineProps;

function ScopedCssBaseline({ children, ...others }: ScopedCssBaselineProps): JSX.Element {
    return (
        <MScopedCssBaseline
            {...others}
        >
            {children}
        </MScopedCssBaseline>
    )
}

export default ScopedCssBaseline;