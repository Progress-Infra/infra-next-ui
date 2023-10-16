import * as React from "react";
import { SpeedDialIcon as MSpeedDialIcon, SpeedDialIconProps as MSpeedDialIconProps } from "@mui/material";

export interface SpeedDialIconProps extends MSpeedDialIconProps { }

function SpeedDialIcon(props: SpeedDialIconProps): JSX.Element {
    return (
        <MSpeedDialIcon
            {...props}
        />
    )
}

export default SpeedDialIcon;