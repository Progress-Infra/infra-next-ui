import * as React from 'react';
import {
    Collapse as MCollapse,
    CollapseProps as MCollapseProps
} from '@mui/material';

export type CollapseProps = MCollapseProps

function Collapse({ children, ...others }: CollapseProps): JSX.Element {
    return <MCollapse {...others}>{children}</MCollapse>;
}

export default Collapse;
