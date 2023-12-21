import * as React from 'react';
import {
    AccordionDetails as MAccordionDetails,
    AccordionDetailsProps as MAccordionDetailsProps
} from '@mui/material';

export type AccordionDetailsProps = MAccordionDetailsProps;

function AccordionDetails({
    children,
    ...others
}: AccordionDetailsProps): JSX.Element {
    return <MAccordionDetails {...others}>{children}</MAccordionDetails>;
}

export default AccordionDetails;
