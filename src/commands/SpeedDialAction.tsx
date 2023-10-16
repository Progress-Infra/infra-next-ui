import * as React from "react";
import { SpeedDialAction as MSpeedDialAction, SpeedDialActionProps as MSpeedDialActionProps } from "@mui/material";

export interface SpeedDialActionProps extends MSpeedDialActionProps { }

function SpeedDialAction(props: SpeedDialActionProps): JSX.Element {
    return (
        <MSpeedDialAction
            {...props}
        />
    )
}

export default SpeedDialAction;