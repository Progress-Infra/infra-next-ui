import * as React from 'react';
import { Paper as MPaper, PaperProps as MPaperProps } from '@mui/material';

export type PaperProps = MPaperProps;

function Paper({ children, ...others }: PaperProps): JSX.Element {
    return <MPaper {...others}>{children}</MPaper>;
}

export default Paper;
