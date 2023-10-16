import * as React from "react";
import { OutlinedInput as MOutlinedInput, OutlinedInputProps as MOutlinedInputProps } from "@mui/material";

export interface OutlinedInputProps extends MOutlinedInputProps { }

function OutlinedInput(props: OutlinedInputProps): JSX.Element {
    return (
        <MOutlinedInput
            {...props}
        />
    )
}

export default OutlinedInput;