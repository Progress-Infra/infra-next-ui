import * as React from 'react';
import {
    Checkbox as MCheckbox,
    CheckboxProps as MCheckboxProps
} from '@mui/material';

export type CheckboxProps = MCheckboxProps

function Checkbox(props: CheckboxProps): JSX.Element {
    return <MCheckbox {...props} />;
}

export default Checkbox;
