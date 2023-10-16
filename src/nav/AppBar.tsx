import * as React from "react";
import { AppBar as MAppBar, AppBarProps as MAppBarProps } from "@mui/material";

export type AppBarProps = MAppBarProps;

function AppBar({ children, ...others }: AppBarProps): JSX.Element {
    return (
        <MAppBar
            {...others}
        >
            {children}
        </MAppBar>
    )
}

export default AppBar;