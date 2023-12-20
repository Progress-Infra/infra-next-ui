import * as React from 'react';
import {
    NativeSelect as MNativeSelect,
    NativeSelectProps as MNativeSelectProps
} from '@mui/material';

export type NativeSelectProps = MNativeSelectProps

function NativeSelect({ children, ...others }: NativeSelectProps): JSX.Element {
    return <MNativeSelect {...others}>{children}</MNativeSelect>;
}

export default NativeSelect;
