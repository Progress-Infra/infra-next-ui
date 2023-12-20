import * as React from 'react';
import {
    StepContent as MStepContent,
    StepContentProps as MStepContentProps
} from '@mui/material';

export type StepContentProps = MStepContentProps

function StepContent({ children, ...others }: StepContentProps): JSX.Element {
    return <MStepContent {...others}>{children}</MStepContent>;
}

export default StepContent;
