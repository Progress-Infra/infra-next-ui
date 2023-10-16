import * as React from "react";
import { DialogTitle as MDialogTitle, DialogTitleProps as MDialogTitleProps } from "@mui/material";

export type DialogTitleProps = MDialogTitleProps;

function DialogTitle({ children, ...others }: DialogTitleProps): JSX.Element {
    return (
        <MDialogTitle
            {...others}
        >
            {children}
        </MDialogTitle>
    )
}

export default DialogTitle;