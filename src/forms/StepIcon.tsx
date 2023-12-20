import * as React from 'react';
import {
    StepIcon as MStepIcon,
    StepIconProps as MStepIconProps
} from '@mui/material';

export type StepIconProps = MStepIconProps

function StepIcon(props: StepIconProps): JSX.Element {
    return <MStepIcon {...props} />;
}

export default StepIcon;
