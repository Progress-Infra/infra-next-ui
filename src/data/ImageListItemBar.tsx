import * as React from "react";
import { ImageListItemBar as MImageListItemBar, ImageListItemBarProps as MImageListItemBarProps } from "@mui/material";

export interface ImageListItemBarProps extends MImageListItemBarProps { }

function ImageListItemBar({ children, ...others }: ImageListItemBarProps): JSX.Element {
    return (
        <MImageListItemBar
            {...others}
        >
            {children}
        </MImageListItemBar>
    )
}

export default ImageListItemBar;