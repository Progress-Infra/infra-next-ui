import * as React from 'react';
import {
    SwipeableDrawer as MSwipeableDrawer,
    SwipeableDrawerProps as MSwipeableDrawerProps
} from '@mui/material';

export type SwipeableDrawerProps = MSwipeableDrawerProps

function SwipeableDrawer({
    children,
    ...others
}: SwipeableDrawerProps): JSX.Element {
    return <MSwipeableDrawer {...others}>{children}</MSwipeableDrawer>;
}

export default SwipeableDrawer;
