import * as React from 'react';
import { Grow as MGrow, GrowProps as MGrowProps } from '@mui/material';

export type GrowProps = MGrowProps;

function Grow({ children, ...others }: GrowProps): JSX.Element {
    return <MGrow {...others}>{children}</MGrow>;
}

export default Grow;
