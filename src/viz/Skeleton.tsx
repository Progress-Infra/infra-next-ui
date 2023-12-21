import * as React from 'react';
import {
    Skeleton as MSkeleton,
    SkeletonProps as MSkeletonProps
} from '@mui/material';

export type SkeletonProps = MSkeletonProps;

function Skeleton({ children, ...others }: SkeletonProps): JSX.Element {
    return <MSkeleton {...others}>{children}</MSkeleton>;
}

export default Skeleton;
