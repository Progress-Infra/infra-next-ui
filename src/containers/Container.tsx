import * as React from 'react';
import {
    Container as MContainer,
    ContainerProps as MContainerProps
} from '@mui/material';

export type ContainerProps = MContainerProps;

function Container({ children, ...others }: ContainerProps): JSX.Element {
    return <MContainer {...others}>{children}</MContainer>;
}

export default Container;
