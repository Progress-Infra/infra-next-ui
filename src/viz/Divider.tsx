import * as React from 'react';
import {
    Divider as MDivider,
    DividerProps as MDividerProps
} from '@mui/material';

export type DividerProps = MDividerProps;

function Divider({ children, ...others }: DividerProps): JSX.Element {
    return <MDivider {...others}>{children}</MDivider>;
}

export default Divider;
