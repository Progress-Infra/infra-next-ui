import * as React from "react";
import { ToggleButton as MToggleButton, ToggleButtonProps as MToggleButtonProps } from "@mui/material";

export type ToggleButtonProps = MToggleButtonProps;

function ToggleButton({ children, ...others }: ToggleButtonProps): JSX.Element {
    return (
        <MToggleButton
            {...others}
        >
            {children}
        </MToggleButton>
    )
}

export default ToggleButton;