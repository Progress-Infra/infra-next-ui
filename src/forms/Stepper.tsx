import * as React from 'react';
import {
    Stepper as MStepper,
    StepperProps as MStepperProps
} from '@mui/material';

export type StepperProps = MStepperProps;

function Stepper({ children, ...others }: StepperProps): JSX.Element {
    return <MStepper {...others}>{children}</MStepper>;
}

export default Stepper;
