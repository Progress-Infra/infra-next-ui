import * as React from "react";
import { Step as MStep, StepProps as MStepProps } from "@mui/material";

export type StepProps = MStepProps;

function Step({ children, ...others }: StepProps): JSX.Element {
    return (
        <MStep
            {...others}
        >
            {children}
        </MStep>
    )
}

export default Step;