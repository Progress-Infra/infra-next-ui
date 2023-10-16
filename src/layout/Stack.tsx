import * as React from "react";
import { Stack as MStack, StackProps as MStackProps } from "@mui/material";

export type StackProps = MStackProps;

function Stack({ children, ...others }: StackProps): JSX.Element {
    return (
        <MStack
            {...others}
        >
            {children}
        </MStack>
    )
}

export default Stack;