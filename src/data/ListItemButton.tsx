import * as React from "react";
import { ListItemButton as MListItemButton, ListItemButtonProps as MListItemButtonProps } from "@mui/material";

export type ListItemButtonProps = MListItemButtonProps;

function ListItemButton({ children, ...others }: ListItemButtonProps): JSX.Element {
    return (
        <MListItemButton
            {...others}
        >
            {children}
        </MListItemButton>
    )
}

export default ListItemButton;