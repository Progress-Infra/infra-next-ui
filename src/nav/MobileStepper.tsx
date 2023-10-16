import * as React from "react";
import { MobileStepper as MMobileStepper, MobileStepperProps as MMobileStepperProps } from "@mui/material";

export interface MobileStepperProps extends MMobileStepperProps { }

function MobileStepper(props: MobileStepperProps): JSX.Element {
    return (
        <MMobileStepper
            {...props}
        />
    )
}

export default MobileStepper;