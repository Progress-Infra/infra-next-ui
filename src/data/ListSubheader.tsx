import * as React from "react";
import { ListSubheader as MListSubheader, ListSubheaderProps as MListSubheaderProps } from "@mui/material";

export type ListSubheaderProps = MListSubheaderProps;

function ListSubheader({ children, ...others }: ListSubheaderProps): JSX.Element {
    return (
        <MListSubheader
            {...others}
        >
            {children}
        </MListSubheader>
    )
}

export default ListSubheader;