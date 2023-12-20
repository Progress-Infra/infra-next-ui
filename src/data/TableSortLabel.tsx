import * as React from 'react';
import {
    TableSortLabel as MTableSortLabel,
    TableSortLabelProps as MTableSortLabelProps
} from '@mui/material';

export type TableSortLabelProps = MTableSortLabelProps;

function TableSortLabel({
    children,
    ...others
}: TableSortLabelProps): JSX.Element {
    return <MTableSortLabel {...others}>{children}</MTableSortLabel>;
}

export default TableSortLabel;
