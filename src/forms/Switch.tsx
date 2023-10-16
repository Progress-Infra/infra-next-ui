import * as React from "react";
import { Switch as MSwitch, SwitchProps as MSwitchProps } from "@mui/material";

export interface SwitchProps extends MSwitchProps { }

function Switch(props: SwitchProps): JSX.Element {
    return (
        <MSwitch
            {...props}
        />
    )
}

export default Switch;