import * as React from "react";
import { Tab as MTab, TabProps as MTabProps } from "@mui/material";

export type TabProps = MTabProps;

function Tab({ children, ...others }: TabProps): JSX.Element {
    return (
        <MTab
            {...others}
        >
            {children}
        </MTab>
    )
}

export default Tab;