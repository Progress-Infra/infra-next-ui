import * as React from "react";
import { ButtonGroup as MButtonGroup, ButtonGroupProps as MButtonGroupProps } from "@mui/material";

export type ButtonGroupProps = MButtonGroupProps;

function ButtonGroup({ children, ...others }: ButtonGroupProps): JSX.Element {
    return (
        <MButtonGroup
            {...others}
        >
            {children}
        </MButtonGroup>
    )
}

export default ButtonGroup;