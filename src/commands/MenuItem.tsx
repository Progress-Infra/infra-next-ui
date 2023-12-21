import * as React from 'react';
import {
    MenuItem as MMenuItem,
    MenuItemProps as MMenuItemProps
} from '@mui/material';

export type MenuItemProps = MMenuItemProps;

function MenuItem({ children, ...others }: MenuItemProps): JSX.Element {
    return <MMenuItem {...others}>{children}</MMenuItem>;
}

export default MenuItem;
