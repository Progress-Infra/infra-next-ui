import * as React from 'react';
import {
    FormControlLabel as MFormControlLabel,
    FormControlLabelProps as MFormControlLabelProps
} from '@mui/material';

export type FormControlLabelProps = MFormControlLabelProps

function FormControlLabel(props: FormControlLabelProps): JSX.Element {
    return <MFormControlLabel {...props} />;
}

export default FormControlLabel;
