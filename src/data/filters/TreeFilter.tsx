import React from "react";
import { Stack } from "@mui/material";
import Icon from "../../viz/Icon";
import { FilterTreeProps } from "./common";
import Button from "../../commands/Button";

function TreeFilter({ nodes, placeholder }: FilterTreeProps) {
    return (
        <Stack
            direction="row"
            spacing={1}
        >
            <Button
                endIcon={<Icon
                    faKey="angle-down"
                />}
                startIcon={<Icon
                    faKey="folder-tree"
                />}
            >
                {placeholder}
            </Button>
        </Stack>
    )
}

export default TreeFilter;