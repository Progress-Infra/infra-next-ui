import * as React from 'react';
import {
    TableCell as MTableCell,
    TableCellProps as MTableCellProps
} from '@mui/material';

export type TableCellProps = MTableCellProps

function TableCell({ children, ...others }: TableCellProps): JSX.Element {
    return <MTableCell {...others}>{children}</MTableCell>;
}

export default TableCell;
