import * as React from "react";
import { Zoom as MZoom, ZoomProps as MZoomProps } from "@mui/material";

export interface ZoomProps extends MZoomProps { }

function Zoom({ children, ...others }: ZoomProps): JSX.Element {
    return (
        <MZoom
            {...others}
        >
            {children}
        </MZoom>
    )
}

export default Zoom;