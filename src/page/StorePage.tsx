import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import {
    StorageKey,
    StorePageGrid,
    StorePageGridProps,
    StorePageHeader,
    StorePageHeaderProps,
    StorePageToolbar,
    StorePageToolbarProps
} from './storepage/index';

export type StorePageProps = StorePageHeaderProps &
    StorePageToolbarProps &
    StorePageGridProps & {
        storageKey?: string;
    };

function StorePage({
    countApi,
    filters,
    onFilterChange,
    status,
    statusApi,
    storageKey,
    tools,
    columns,
    title,
    ...others
}: StorePageProps) {
    const setStorageKey = useSetRecoilState(StorageKey);

    React.useEffect(() => {
        if (storageKey) {
            setStorageKey(`nui.${storageKey}`);
        }
    }, [storageKey, setStorageKey]);

    return (
        <RecoilRoot>
            <Stack spacing={2} sx={{ height: 1 }}>
                <StorePageHeader
                    countApi={countApi}
                    filters={filters}
                    onFilterChange={onFilterChange}
                    status={status}
                    statusApi={statusApi}
                    title={title}
                />
                <StorePageToolbar tools={tools} columns={columns} />
                <Box sx={{ flexGrow: 1 }}>
                    <StorePageGrid {...others} />
                </Box>
            </Stack>
        </RecoilRoot>
    );
}

export default StorePage;
