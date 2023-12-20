import * as React from 'react';
import { Select as MSelect, SelectProps as MSelectProps } from '@mui/material';

export type SelectProps = MSelectProps

function Select({ children, ...others }: SelectProps): JSX.Element {
    return <MSelect {...others}>{children}</MSelect>;
}

export default Select;
