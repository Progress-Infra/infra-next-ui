import * as React from "react";
import { Avatar as MAvatar, AvatarProps as MAvatarProps } from "@mui/material";

export type AvatarProps = MAvatarProps;

function Avatar({ children, ...others }: AvatarProps): JSX.Element {
    return (
        <MAvatar
            {...others}
        >
            {children}
        </MAvatar>
    )
}

export default Avatar;