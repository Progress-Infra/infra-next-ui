import * as React from 'react';
import {
    SpeedDial as MSpeedDial,
    SpeedDialProps as MSpeedDialProps
} from '@mui/material';

export type SpeedDialProps = MSpeedDialProps;

function SpeedDial({ children, ...others }: SpeedDialProps): JSX.Element {
    return <MSpeedDial {...others}>{children}</MSpeedDial>;
}

export default SpeedDial;
