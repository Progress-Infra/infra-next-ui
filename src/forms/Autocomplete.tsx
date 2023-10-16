import * as React from "react";
import { Autocomplete as MAutocomplete, AutocompleteProps as MAutocompleteProps } from "@mui/material";
import { ChipTypeMap } from "@mui/material";

export interface AutocompleteProps
    <
        Value,
        Multiple extends boolean | undefined,
        DisableClearable extends boolean | undefined,
        FreeSolo extends boolean | undefined,
        ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
    >
    extends MAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent> { }

function Autocomplete
    <
        Value,
        Multiple extends boolean | undefined = false,
        DisableClearable extends boolean | undefined = false,
        FreeSolo extends boolean | undefined = false,
        ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
    >
    (
        props: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>
    ): JSX.Element {
    return (
        <MAutocomplete
            {...props}
        />
    )
}

export default Autocomplete;