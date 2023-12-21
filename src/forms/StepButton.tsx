import * as React from 'react';
import {
    StepButton as MStepButton,
    StepButtonProps as MStepButtonProps
} from '@mui/material';

export type StepButtonProps = MStepButtonProps;

function StepButton({ children, ...others }: StepButtonProps): JSX.Element {
    return <MStepButton {...others}>{children}</MStepButton>;
}

export default StepButton;
