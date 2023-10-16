import * as React from "react";
import { DateTimePicker as MDateTimePicker, DateTimePickerProps as MDateTimePickerProps } from "@mui/x-date-pickers";

export interface DateTimePickerProps<TDate> extends MDateTimePickerProps<TDate> { }

function DateTimePicker<TDate>(props: DateTimePickerProps<TDate>): JSX.Element {
    return (
        <MDateTimePicker
            {...props}
        />
    )
}

export default DateTimePicker;