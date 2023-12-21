import * as React from 'react';
import {
    ImageListItemBar as MImageListItemBar,
    ImageListItemBarProps as MImageListItemBarProps
} from '@mui/material';

export type ImageListItemBarProps = MImageListItemBarProps;

function ImageListItemBar({
    children,
    ...others
}: ImageListItemBarProps): JSX.Element {
    return <MImageListItemBar {...others}>{children}</MImageListItemBar>;
}

export default ImageListItemBar;
