import * as React from "react";
import { ListItem as MListItem, ListItemProps as MListItemProps } from "@mui/material";

export type ListItemProps = MListItemProps;

function ListItem({ children, ...others }: ListItemProps): JSX.Element {
    return (
        <MListItem
            {...others}
        >
            {children}
        </MListItem>
    )
}

export default ListItem;