import * as React from "react";
import { Chip as MChip, ChipProps as MChipProps } from "@mui/material";

export type ChipProps = MChipProps;

function Chip({ children, ...others }: ChipProps): JSX.Element {
    return (
        <MChip
            {...others}
        >
            {children}
        </MChip>
    )
}

export default Chip;