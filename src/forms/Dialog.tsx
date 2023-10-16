import * as React from "react";
import { Dialog as MDialog, DialogProps as MDialogProps } from "@mui/material";

export interface DialogProps extends MDialogProps { }

function Dialog({ children, ...others }: DialogProps): JSX.Element {
    return (
        <MDialog
            {...others}
        >
            {children}
        </MDialog>
    )
}

export default Dialog;