import * as React from "react";
import { SvgIconProps } from "@mui/material";
import { Menu, KeyboardArrowDown, KeyboardArrowUp, Settings } from "@mui/icons-material";

export type IconKeys = "hamburgerMenu" | "menuDown" | "menuUp" | "settings";

export type IconProps = SvgIconProps & {
    iconKey: IconKeys
};

function getIcon({ iconKey, children, ...others }: IconProps): JSX.Element {
    switch (iconKey) {
        case "hamburgerMenu":
            return <Menu
                {...others}
            >
                {children}
            </Menu>
        case "menuDown":
            return <KeyboardArrowDown
                {...others}
            >
                {children}
            </KeyboardArrowDown>
        case "menuUp":
            return <KeyboardArrowUp
                {...others}
            >
                {children}
            </KeyboardArrowUp>
        case "settings":
            return <Settings
                {...others}
            >
                {children}
            </Settings>

        default:
            return <></>
    }
}

function Icon(props: IconProps): JSX.Element {
    return getIcon({ ...props });
}

export default Icon;