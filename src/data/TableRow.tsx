import * as React from "react";
import { TableRow as MTableRow, TableRowProps as MTableRowProps } from "@mui/material";

export type TableRowProps = MTableRowProps;

function TableRow({ children, ...others }: TableRowProps): JSX.Element {
    return (
        <MTableRow
            {...others}
        >
            {children}
        </MTableRow>
    )
}

export default TableRow;