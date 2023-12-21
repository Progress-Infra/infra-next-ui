import * as React from 'react';
import { Hidden as MHidden, HiddenProps as MHiddenProps } from '@mui/material';

export type HiddenProps = MHiddenProps;

function Hidden({ children, ...others }: HiddenProps): JSX.Element {
    return <MHidden {...others}>{children}</MHidden>;
}

export default Hidden;
