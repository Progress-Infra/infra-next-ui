import * as React from 'react';
import { Card as MCard, CardProps as MCardProps } from '@mui/material';

export type CardProps = MCardProps;

function Card({ children, ...others }: CardProps): JSX.Element {
    return <MCard {...others}>{children}</MCard>;
}

export default Card;
