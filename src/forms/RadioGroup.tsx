import * as React from 'react';
import {
    RadioGroup as MRadioGroup,
    RadioGroupProps as MRadioGroupProps
} from '@mui/material';

export type RadioGroupProps = MRadioGroupProps;

function RadioGroup({ children, ...others }: RadioGroupProps): JSX.Element {
    return <MRadioGroup {...others}>{children}</MRadioGroup>;
}

export default RadioGroup;
