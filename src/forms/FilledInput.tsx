import * as React from "react";
import { FilledInput as MFilledInput, FilledInputProps as MFilledInputProps } from "@mui/material";

export interface FilledInputProps extends MFilledInputProps { }

function FilledInput(props: FilledInputProps): JSX.Element {
    return (
        <MFilledInput
            {...props}
        />
    )
}

export default FilledInput;