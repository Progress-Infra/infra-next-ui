import * as React from "react";
import { LinearProgress as MLinearProgress, LinearProgressProps as MLinearProgressProps } from "@mui/material";

export interface LinearProgressProps extends MLinearProgressProps { }

function LinearProgress(props: LinearProgressProps): JSX.Element {
    return (
        <MLinearProgress
            {...props}
        />
    )
}

export default LinearProgress;