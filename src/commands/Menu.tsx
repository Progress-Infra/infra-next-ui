import * as React from "react";
import { Menu as MMenu, MenuProps as MMenuProps } from "@mui/material";

export interface MenuProps extends MMenuProps { }

function Menu({ children, ...others }: MenuProps): JSX.Element {
    return (
        <MMenu
            {...others}
        >
            {children}
        </MMenu>
    )
}

export default Menu;