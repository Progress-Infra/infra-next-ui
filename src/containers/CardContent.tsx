import * as React from 'react';
import {
    CardContent as MCardContent,
    CardContentProps as MCardContentProps
} from '@mui/material';

export type CardContentProps = MCardContentProps;

function CardContent({ children, ...others }: CardContentProps): JSX.Element {
    return <MCardContent {...others}>{children}</MCardContent>;
}

export default CardContent;
