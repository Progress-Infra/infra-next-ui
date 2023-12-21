import * as React from 'react';
import {
    DatePicker as MDatePicker,
    DatePickerProps as MDatePickerProps
} from '@mui/x-date-pickers';

export type DatePickerProps<TDate> = MDatePickerProps<TDate>;

function DatePicker<TDate>(props: DatePickerProps<TDate>): JSX.Element {
    return <MDatePicker {...props} />;
}

export default DatePicker;
