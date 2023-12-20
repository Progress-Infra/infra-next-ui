import * as React from 'react';
import {
    Toolbar as MToolbar,
    ToolbarProps as MToolbarProps
} from '@mui/material';

export type ToolbarProps = MToolbarProps;

function Toolbar({ children, ...others }: ToolbarProps): JSX.Element {
    return <MToolbar {...others}>{children}</MToolbar>;
}

export default Toolbar;
