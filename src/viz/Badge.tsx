import * as React from 'react';
import { Badge as MBadge, BadgeProps as MBadgeProps } from '@mui/material';

export type BadgeProps = MBadgeProps;

function Badge({ children, ...others }: BadgeProps): JSX.Element {
    return <MBadge {...others}>{children}</MBadge>;
}

export default Badge;
