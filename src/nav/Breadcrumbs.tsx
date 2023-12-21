import * as React from 'react';
import {
    Breadcrumbs as MBreadcrumbs,
    BreadcrumbsProps as MBreadcrumbsProps
} from '@mui/material';

export type BreadcrumbsProps = MBreadcrumbsProps;

function Breadcrumbs({ children, ...others }: BreadcrumbsProps): JSX.Element {
    return <MBreadcrumbs {...others}>{children}</MBreadcrumbs>;
}

export default Breadcrumbs;
