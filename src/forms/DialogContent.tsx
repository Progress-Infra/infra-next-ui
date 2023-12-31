import * as React from 'react';
import {
    DialogContent as MDialogContent,
    DialogContentProps as MDialogContentProps
} from '@mui/material';

export type DialogContentProps = MDialogContentProps;

function DialogContent({
    children,
    ...others
}: DialogContentProps): JSX.Element {
    return <MDialogContent {...others}>{children}</MDialogContent>;
}

export default DialogContent;
