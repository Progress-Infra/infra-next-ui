import * as React from "react";
import { Icon as MIcon, IconProps as MIconProps } from "@mui/material";

export type IconProps = MIconProps;

function Icon({ children, ...others }: IconProps): JSX.Element {
    return (
        <MIcon
            {...others}
        >
            {children}
        </MIcon>
    )
}

export default Icon;