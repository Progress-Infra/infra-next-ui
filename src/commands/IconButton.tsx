import * as React from 'react';
import {
    IconButton as MIconButton,
    IconButtonProps as MIconButtonProps
} from '@mui/material';

export type IconButtonProps = MIconButtonProps;

function IconButton({ children, ...others }: IconButtonProps): JSX.Element {
    return <MIconButton {...others}>{children}</MIconButton>;
}

export default IconButton;
