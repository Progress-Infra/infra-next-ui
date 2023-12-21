import * as React from 'react';
import { Drawer as MDrawer, DrawerProps as MDrawerProps } from '@mui/material';

export type DrawerProps = MDrawerProps;

function Drawer({ children, ...others }: DrawerProps): JSX.Element {
    return <MDrawer {...others}>{children}</MDrawer>;
}

export default Drawer;
