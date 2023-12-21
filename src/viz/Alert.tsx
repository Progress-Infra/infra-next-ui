import * as React from 'react';
import { Alert as MAlert, AlertProps as MAlertProps } from '@mui/material';

export type AlertProps = MAlertProps

function Alert({ children, ...others }: AlertProps): JSX.Element {
    return <MAlert {...others}>{children}</MAlert>;
}

export default Alert;
