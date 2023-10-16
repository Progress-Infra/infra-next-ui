import * as React from "react";
import { StepLabel as MStepLabel, StepLabelProps as MStepLabelProps } from "@mui/material";

export interface StepLabelProps extends MStepLabelProps { }

function StepLabel({ children, ...others }: StepLabelProps): JSX.Element {
    return (
        <MStepLabel
            {...others}
        >
            {children}
        </MStepLabel>
    )
}

export default StepLabel;