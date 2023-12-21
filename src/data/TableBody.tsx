import * as React from 'react';
import {
    TableBody as MTableBody,
    TableBodyProps as MTableBodyProps
} from '@mui/material';

export type TableBodyProps = MTableBodyProps;

function TableBody({ children, ...others }: TableBodyProps): JSX.Element {
    return <MTableBody {...others}>{children}</MTableBody>;
}

export default TableBody;
