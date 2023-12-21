import * as React from 'react';
import {
    Accordion as MAccordion,
    AccordionProps as MAccordionProps
} from '@mui/material';

export type AccordionProps = MAccordionProps;

function Accordion({ children, ...others }: AccordionProps): JSX.Element {
    return <MAccordion {...others}>{children}</MAccordion>;
}

export default Accordion;
