import * as React from 'react';
import {
    Popover as MPopover,
    PopoverProps as MPopoverProps
} from '@mui/material';

export type PopoverProps = MPopoverProps;

function Popover({ children, ...others }: PopoverProps): JSX.Element {
    return <MPopover {...others}>{children}</MPopover>;
}

export default Popover;
