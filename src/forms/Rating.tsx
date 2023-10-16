import * as React from "react";
import { Rating as MRating, RatingProps as MRatingProps } from "@mui/material";

export interface RatingProps extends MRatingProps { }

function Rating(props: RatingProps): JSX.Element {
    return (
        <MRating
            {...props}
        />
    )
}

export default Rating;