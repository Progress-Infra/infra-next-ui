import * as React from 'react';
import {
    TablePagination as MTablePagination,
    TablePaginationProps as MTablePaginationProps
} from '@mui/material';

export type TablePaginationProps = MTablePaginationProps;

function TablePagination(props: TablePaginationProps): JSX.Element {
    return <MTablePagination {...props} />;
}

export default TablePagination;
