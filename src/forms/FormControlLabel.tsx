import * as React from "react";
import { FormControlLabel as MFormControlLabel, FormControlLabelProps as MFormControlLabelProps } from "@mui/material";

export interface FormControlLabelProps extends MFormControlLabelProps { }

function FormControlLabel(props: FormControlLabelProps): JSX.Element {
    return (
        <MFormControlLabel
            {...props}
        />
    )
}

export default FormControlLabel;