import * as React from "react";
import { DialogContentText as MDialogContentText, DialogContentTextProps as MDialogContentTextProps } from "@mui/material";

export type DialogContentTextProps = MDialogContentTextProps;

function DialogContentText({ children, ...others }: DialogContentTextProps): JSX.Element {
    return (
        <MDialogContentText
            {...others}
        >
            {children}
        </MDialogContentText>
    )
}

export default DialogContentText;