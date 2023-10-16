import * as React from "react";
import { Radio as MRadio, RadioProps as MRadioProps } from "@mui/material";

export interface RadioProps extends MRadioProps { }

function Radio(props: RadioProps): JSX.Element {
    return (
        <MRadio
            {...props}
        />
    )
}

export default Radio;