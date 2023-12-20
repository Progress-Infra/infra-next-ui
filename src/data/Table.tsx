import * as React from 'react';
import { Table as MTable, TableProps as MTableProps } from '@mui/material';

export type TableProps = MTableProps;

function Table({ children, ...others }: TableProps): JSX.Element {
    return <MTable {...others}>{children}</MTable>;
}

export default Table;
