import * as React from 'react';
import { Grid as MGrid, GridProps as MGridProps } from '@mui/material';

export type GridProps = MGridProps;

function Grid({ children, ...others }: GridProps): JSX.Element {
    return <MGrid {...others}>{children}</MGrid>;
}

export default Grid;
