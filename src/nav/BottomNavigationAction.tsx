import * as React from "react";
import { BottomNavigationAction as MBottomNavigationAction, BottomNavigationActionProps as MBottomNavigationActionProps } from "@mui/material";

export type BottomNavigationActionProps = MBottomNavigationActionProps;

function BottomNavigationAction({ children, ...others }: BottomNavigationActionProps): JSX.Element {
    return (
        <MBottomNavigationAction
            {...others}
        >
            {children}
        </MBottomNavigationAction>
    )
}

export default BottomNavigationAction;