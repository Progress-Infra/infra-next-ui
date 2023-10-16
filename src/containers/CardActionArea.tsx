import * as React from "react";
import { CardActionArea as MCardActionArea, CardActionAreaProps as MCardActionAreaProps } from "@mui/material";

export type CardActionAreaProps = MCardActionAreaProps;

function CardActionArea({ children, ...others }: CardActionAreaProps): JSX.Element {
    return (
        <MCardActionArea
            {...others}
        >
            {children}
        </MCardActionArea>
    )
}

export default CardActionArea;