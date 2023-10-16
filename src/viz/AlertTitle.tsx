import * as React from "react";
import { AlertTitle as MAlertTitle, AlertTitleProps as MAlertTitleProps } from "@mui/material";

export interface AlertTitleProps extends MAlertTitleProps { }

function AlertTitle({ children, ...others }: AlertTitleProps): JSX.Element {
    return (
        <MAlertTitle
            {...others}
        >
            {children}
        </MAlertTitle>
    )
}

export default AlertTitle;