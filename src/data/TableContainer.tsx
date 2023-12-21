import * as React from 'react';
import {
    TableContainer as MTableContainer,
    TableContainerProps as MTableContainerProps
} from '@mui/material';

export type TableContainerProps = MTableContainerProps;

function TableContainer({
    children,
    ...others
}: TableContainerProps): JSX.Element {
    return <MTableContainer {...others}>{children}</MTableContainer>;
}

export default TableContainer;
