import * as React from 'react';
import {
    CardMedia as MCardMedia,
    CardMediaProps as MCardMediaProps
} from '@mui/material';

export type CardMediaProps = MCardMediaProps;

function CardMedia({ children, ...others }: CardMediaProps): JSX.Element {
    return <MCardMedia {...others}>{children}</MCardMedia>;
}

export default CardMedia;
