import * as React from 'react';
import {
    ListItemSecondaryAction as MListItemSecondaryAction,
    ListItemSecondaryActionProps as MListItemSecondaryActionProps
} from '@mui/material';

export type ListItemSecondaryActionProps = MListItemSecondaryActionProps;

function ListItemSecondaryAction({
    children,
    ...others
}: ListItemSecondaryActionProps): JSX.Element {
    return (
        <MListItemSecondaryAction {...others}>
            {children}
        </MListItemSecondaryAction>
    );
}

export default ListItemSecondaryAction;
