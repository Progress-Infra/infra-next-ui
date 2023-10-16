import * as React from "react";
import { SnackbarContent as MSnackbarContent, SnackbarContentProps as MSnackbarContentProps } from "@mui/material";

export interface SnackbarContentProps extends MSnackbarContentProps { }

function SnackbarContent(props: SnackbarContentProps): JSX.Element {
    return (
        <MSnackbarContent
            {...props}
        />
    )
}

export default SnackbarContent;