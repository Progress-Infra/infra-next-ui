import * as React from "react";
import { CardActions as MCardActions, CardActionsProps as MCardActionsProps } from "@mui/material";

export interface CardActionsProps extends MCardActionsProps { }

function CardActions({ children, ...others }: CardActionsProps): JSX.Element {
    return (
        <MCardActions
            {...others}
        >
            {children}
        </MCardActions>
    )
}

export default CardActions;