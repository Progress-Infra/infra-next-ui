import * as React from 'react';
import {
    TableHead as MTableHead,
    TableHeadProps as MTableHeadProps
} from '@mui/material';

export type TableHeadProps = MTableHeadProps;

function TableHead({ children, ...others }: TableHeadProps): JSX.Element {
    return <MTableHead {...others}>{children}</MTableHead>;
}

export default TableHead;
