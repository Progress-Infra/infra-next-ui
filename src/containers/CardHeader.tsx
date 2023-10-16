import * as React from "react";
import { CardHeader as MCardHeader, CardHeaderProps as MCardHeaderProps } from "@mui/material";

export type CardHeaderProps = MCardHeaderProps;

function CardHeader({ children, ...others }: CardHeaderProps): JSX.Element {
    return (
        <MCardHeader
            {...others}
        >
            {children}
        </MCardHeader>
    )
}

export default CardHeader;