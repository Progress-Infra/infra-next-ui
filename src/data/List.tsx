import * as React from "react";
import { List as MList, ListProps as MListProps } from "@mui/material";

export type ListProps = MListProps;

function List({ children, ...others }: ListProps): JSX.Element {
    return (
        <MList
            {...others}
        >
            {children}
        </MList>
    )
}

export default List;