import * as React from 'react';
import {
    DialogActions as MDialogActions,
    DialogActionsProps as MDialogActionsProps
} from '@mui/material';

export type DialogActionsProps = MDialogActionsProps;

function DialogActions({
    children,
    ...others
}: DialogActionsProps): JSX.Element {
    return <MDialogActions {...others}>{children}</MDialogActions>;
}

export default DialogActions;
