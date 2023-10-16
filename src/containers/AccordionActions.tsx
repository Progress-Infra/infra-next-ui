import * as React from "react";
import { AccordionActions as MAccordionActions, AccordionActionsProps as MAccordionActionsProps } from "@mui/material";

export interface AccordionActionsProps extends MAccordionActionsProps { }

function AccordionActions({ children, ...others }: AccordionActionsProps): JSX.Element {
    return (
        <MAccordionActions
            {...others}
        >
            {children}
        </MAccordionActions>
    )
}

export default AccordionActions;