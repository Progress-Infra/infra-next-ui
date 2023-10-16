import * as React from "react";
import { PaginationItem as MPaginationItem, PaginationItemProps as MPaginationItemProps } from "@mui/material";

export type PaginationItemProps = MPaginationItemProps;

function PaginationItem({ children, ...others }: PaginationItemProps): JSX.Element {
    return (
        <MPaginationItem
            {...others}
        >
            {children}
        </MPaginationItem>
    )
}

export default PaginationItem;