import * as React from 'react';
import {
    ListItemIcon as MListItemIcon,
    ListItemIconProps as MListItemIconProps
} from '@mui/material';

export type ListItemIconProps = MListItemIconProps;

function ListItemIcon({ children, ...others }: ListItemIconProps): JSX.Element {
    return <MListItemIcon {...others}>{children}</MListItemIcon>;
}

export default ListItemIcon;
