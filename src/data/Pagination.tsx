import * as React from 'react';
import {
    Pagination as MPagination,
    PaginationProps as MPaginationProps
} from '@mui/material';

export type PaginationProps = MPaginationProps;

function Pagination(props: PaginationProps): JSX.Element {
    return <MPagination {...props} />;
}

export default Pagination;
