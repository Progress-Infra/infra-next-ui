import * as React from 'react';
import { Chip, ChipProps } from '@mui/material';
import Icon from './Icon';

type omittedProps =
    | 'avatar'
    | 'children'
    | 'classes'
    | 'color'
    | 'component'
    | 'deleteIcon'
    | 'disabled'
    | 'icon'
    | 'onDelete'
    | 'skipFocusWhenDisabled'
    | 'variant';
export type status = 'error' | 'info' | 'success' | 'warning';

export type StatusChipProps = Omit<ChipProps, omittedProps> & {
    status: status;
};

function StatusChip({ status, ...others }: StatusChipProps): JSX.Element {
    return (
        <Chip
            {...others}
            color={status}
            icon={<Icon faKey="circle" />}
            variant="filled"
            {...others}
        />
    );
}

export default StatusChip;
