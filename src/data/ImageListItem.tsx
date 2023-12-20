import * as React from 'react';
import {
    ImageListItem as MImageListItem,
    ImageListItemProps as MImageListItemProps
} from '@mui/material';

export type ImageListItemProps = MImageListItemProps;

function ImageListItem({
    children,
    ...others
}: ImageListItemProps): JSX.Element {
    return <MImageListItem {...others}>{children}</MImageListItem>;
}

export default ImageListItem;
