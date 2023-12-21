import * as React from 'react';
import {
    StepConnector as MStepConnector,
    StepConnectorProps as MStepConnectorProps
} from '@mui/material';

export type StepConnectorProps = MStepConnectorProps;

function StepConnector(props: StepConnectorProps): JSX.Element {
    return <MStepConnector {...props} />;
}

export default StepConnector;
