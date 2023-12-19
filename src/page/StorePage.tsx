import * as React from "react";
import { Box, Stack } from "@mui/material";
import { RecoilRoot, useSetRecoilState } from "recoil";
import StorePageGrid, { StorePageGridProps } from "./storepage/StorePageGrid";
import StorePageHeader, { StorePageHeaderProps } from "./storepage/StorePageHeader";
import StorePageToolbar, { StorePageToolbarProps } from "./storepage/StorePageToolbar";
import { StorageKey } from "./storepage/StorePageState";

export type StorePageProps = StorePageHeaderProps & StorePageToolbarProps & StorePageGridProps & {
    storageKey?: string
}

function StorePage({ countApi, filters, onFilterChange, status, statusApi, storageKey, tools, title, ...others }
    : StorePageProps) {

    const setStorageKey = useSetRecoilState(StorageKey);

    React.useEffect(() => {
        if (storageKey) {
            setStorageKey(`nui.${storageKey}`);
        }
    }, [storageKey, setStorageKey]);

    return (
        <RecoilRoot>
            <Stack
                spacing={2}
                sx={{ height: 1 }}
            >
                <StorePageHeader
                    countApi={countApi}
                    filters={filters}
                    onFilterChange={onFilterChange}
                    status={status}
                    statusApi={statusApi}
                    title={title}
                />
                <StorePageToolbar
                    tools={tools}
                />
                <Box
                    sx={{ flexGrow: 1 }}
                >
                    <StorePageGrid
                        {...others}
                    />
                </Box>
            </Stack>
        </RecoilRoot>
    )
}

export default StorePage;