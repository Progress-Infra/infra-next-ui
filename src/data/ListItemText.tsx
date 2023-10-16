import * as React from "react";
import { ListItemText as MListItemText, ListItemTextProps as MListItemTextProps } from "@mui/material";

export interface ListItemTextProps extends MListItemTextProps { }

function ListItemText({ children, ...others }: ListItemTextProps): JSX.Element {
    return (
        <MListItemText
            {...others}
        >
            {children}
        </MListItemText>
    )
}

export default ListItemText;