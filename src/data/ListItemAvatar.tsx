import * as React from "react";
import { ListItemAvatar as MListItemAvatar, ListItemAvatarProps as MListItemAvatarProps } from "@mui/material";

export interface ListItemAvatarProps extends MListItemAvatarProps { }

function ListItemAvatar({ children, ...others }: ListItemAvatarProps): JSX.Element {
    return (
        <MListItemAvatar
            {...others}
        >
            {children}
        </MListItemAvatar>
    )
}

export default ListItemAvatar;