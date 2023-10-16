import * as React from "react";
import { Typography as MTypography, TypographyProps as MTypographyProps } from "@mui/material";

export type TypographyProps = MTypographyProps;

function Typography({ children, ...others }: TypographyProps): JSX.Element {
    return (
        <MTypography
            {...others}
        >
            {children}
        </MTypography>
    )
}

export default Typography;