import * as React from "react";
import { ImageList as MImageList, ImageListProps as MImageListProps } from "@mui/material";

export type ImageListProps = MImageListProps;

function ImageList({ children, ...others }: ImageListProps): JSX.Element {
    return (
        <MImageList
            {...others}
        >
            {children}
        </MImageList>
    )
}

export default ImageList;