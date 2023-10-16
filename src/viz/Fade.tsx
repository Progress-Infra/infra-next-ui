import * as React from "react";
import { Fade as MFade, FadeProps as MFadeProps } from "@mui/material";

export interface FadeProps extends MFadeProps { }

function Fade({ children, ...others }: FadeProps): JSX.Element {
    return (
        <MFade
            {...others}
        >
            {children}
        </MFade>
    )
}

export default Fade;