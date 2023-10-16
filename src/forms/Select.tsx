import * as React from "react";
import { Select as MSelect, SelectProps as MSelectProps } from "@mui/material";

export interface SelectProps extends MSelectProps { }

function Select({ children, ...others }: SelectProps): JSX.Element {
    return (
        <MSelect
            {...others}
        >
            {children}
        </MSelect>
    )
}

export default Select;