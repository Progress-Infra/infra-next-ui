import * as React from "react";
import { Tabs as MTabs, TabsProps as MTabsProps } from "@mui/material";

export type TabsProps = MTabsProps;

function Tabs({ children, ...others }: TabsProps): JSX.Element {
    return (
        <MTabs
            {...others}
        >
            {children}
        </MTabs>
    )
}

export default Tabs;