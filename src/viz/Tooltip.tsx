import * as React from 'react';
import {
    Tooltip as MTooltip,
    TooltipProps as MTooltipProps
} from '@mui/material';

export type TooltipProps = MTooltipProps;

function Tooltip({ children, ...others }: TooltipProps): JSX.Element {
    return <MTooltip {...others}>{children}</MTooltip>;
}

export default Tooltip;
