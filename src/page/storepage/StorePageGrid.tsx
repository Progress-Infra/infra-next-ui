import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { FilterValue } from './StorePageState';
import { Alert, LinearProgress, Snackbar } from '@mui/material';

type omittedProps = 'rows';

export type StorePageGridProps = Omit<DataGridProps, omittedProps> & {
    rows?: object[];
    rowsApi?: (args: object) => Promise<object[]>;
};

function StorePageGrid({
    autoPageSize = true,
    density = 'compact',
    hideFooterSelectedRowCount = true,
    loading,
    rows,
    rowsApi,
    ...others
}: StorePageGridProps) {
    const [gridRows, setGridRows] = React.useState<object[]>(rows || []),
        filterValue = useRecoilValue(FilterValue),
        [isLoading, setIsLoading] = React.useState<boolean>(!!loading),
        [errMessage, setErrMessage] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (rowsApi && filterValue) {
            setIsLoading(true);

            rowsApi(filterValue)
                .then((result) => {
                    setGridRows(result);
                    setErrMessage(null);
                })
                .catch((e: Error) => {
                    setErrMessage(e.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [setGridRows, rowsApi, filterValue, setIsLoading, setErrMessage]);

    return (
        <>
            {
                <DataGrid
                    autoPageSize={autoPageSize}
                    density={density}
                    hideFooterSelectedRowCount={hideFooterSelectedRowCount}
                    loading={isLoading}
                    rows={gridRows ?? []}
                    slots={{
                        loadingOverlay: LinearProgress
                    }}
                    {...others}
                />
            }
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={10000}
                onClose={(_, reason) => {
                    if (reason === 'timeout') {
                        setErrMessage(null);
                    }
                }}
                open={!!errMessage}
            >
                <Alert severity="error" variant="filled">
                    {errMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default StorePageGrid;
