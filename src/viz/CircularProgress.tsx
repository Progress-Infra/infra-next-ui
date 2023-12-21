import * as React from 'react';
import {
    CircularProgress as MCircularProgress,
    CircularProgressProps as MCircularProgressProps
} from '@mui/material';

export type CircularProgressProps = MCircularProgressProps;

function CircularProgress(props: CircularProgressProps): JSX.Element {
    return <MCircularProgress {...props} />;
}

export default CircularProgress;
