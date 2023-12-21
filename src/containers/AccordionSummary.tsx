import * as React from 'react';
import {
    AccordionSummary as MAccordionSummary,
    AccordionSummaryProps as MAccordionSummaryProps
} from '@mui/material';

export type AccordionSummaryProps = MAccordionSummaryProps;

function AccordionSummary({
    children,
    ...others
}: AccordionSummaryProps): JSX.Element {
    return <MAccordionSummary {...others}>{children}</MAccordionSummary>;
}

export default AccordionSummary;
