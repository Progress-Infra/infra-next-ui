import * as React from "react";
import { TableFooter as MTableFooter, TableFooterProps as MTableFooterProps } from "@mui/material";

export type TableFooterProps = MTableFooterProps;

function TableFooter({ children, ...others }: TableFooterProps): JSX.Element {
    return (
        <MTableFooter
            {...others}
        >
            {children}
        </MTableFooter>
    )
}

export default TableFooter;