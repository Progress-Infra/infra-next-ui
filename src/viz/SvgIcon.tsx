import * as React from "react";
import { SvgIcon as MSvgIcon, SvgIconProps as MSvgIconProps } from "@mui/material";

export type SvgIconProps = MSvgIconProps;

function SvgIcon({ children, ...others }: SvgIconProps): JSX.Element {
    return (
        <MSvgIcon
            {...others}
        >
            {children}
        </MSvgIcon>
    )
}

export default SvgIcon;