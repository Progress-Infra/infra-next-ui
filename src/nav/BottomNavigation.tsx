import * as React from "react";
import { BottomNavigation as MBottomNavigation, BottomNavigationProps as MBottomNavigationProps } from "@mui/material";

export type BottomNavigationProps = MBottomNavigationProps;

function BottomNavigation({ children, ...others }: BottomNavigationProps): JSX.Element {
    return (
        <MBottomNavigation
            {...others}
        >
            {children}
        </MBottomNavigation>
    )
}

export default BottomNavigation;