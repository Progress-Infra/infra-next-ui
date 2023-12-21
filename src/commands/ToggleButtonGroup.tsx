import * as React from 'react';
import {
    ToggleButtonGroup as MToggleButtonGroup,
    ToggleButtonGroupProps as MToggleButtonGroupProps
} from '@mui/material';

export type ToggleButtonGroupProps = MToggleButtonGroupProps;

function ToggleButtonGroup({
    children,
    ...others
}: ToggleButtonGroupProps): JSX.Element {
    return <MToggleButtonGroup {...others}>{children}</MToggleButtonGroup>;
}

export default ToggleButtonGroup;
