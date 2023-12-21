import * as React from 'react';
import { Rating as MRating, RatingProps as MRatingProps } from '@mui/material';

export type RatingProps = MRatingProps

function Rating(props: RatingProps): JSX.Element {
    return <MRating {...props} />;
}

export default Rating;
