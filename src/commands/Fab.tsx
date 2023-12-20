import * as React from 'react';
import { Fab as MFab, FabProps as MFabProps } from '@mui/material';

export type FabProps = MFabProps;

function Fab({ children, ...others }: FabProps): JSX.Element {
    return <MFab {...others}>{children}</MFab>;
}

export default Fab;
