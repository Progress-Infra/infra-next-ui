import {
    DataGrid,
    DataGridProps,
    GridColDef,
    useGridApiRef
} from '@mui/x-data-grid';
import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    FilterValue,
    GridColumnVisibility,
    GridSelection
} from './StorePageState';
import { Alert, LinearProgress, Snackbar } from '@mui/material';

type omittedProps = 'rows' | 'columns';

export type GridColumn = GridColDef & {
    hidden?: boolean;
};

export type StorePageGridProps = Omit<DataGridProps, omittedProps> & {
    columns: GridColumn[];
    rows?: object[];
    rowsApi?: (args: object) => Promise<object[]>;
};

function StorePageGrid({
    autoPageSize = true,
    density = 'compact',
    hideFooterSelectedRowCount = true,
    loading,
    columns,
    rows,
    rowsApi,
    ...others
}: StorePageGridProps) {
    const [gridRows, setGridRows] = React.useState<object[]>(rows || []),
        filterValue = useRecoilValue(FilterValue),
        columnVisibility = useRecoilValue(GridColumnVisibility),
        [selectedRows, setSelectedRows] = useRecoilState(GridSelection),
        [isLoading, setIsLoading] = React.useState<boolean>(!!loading),
        [errMessage, setErrMessage] = React.useState<string | null>(null),
        apiRef = useGridApiRef();

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

    React.useEffect(() => {
        for (const col of columns) {
            let isVisible = col.hidden === undefined ? true : !col.hidden;
            if (
                (col.hideable === undefined || col.hideable) &&
                columnVisibility &&
                col.field in columnVisibility
            ) {
                isVisible = columnVisibility[col.field];
            }
            apiRef.current.setColumnVisibility(col.field, isVisible);
        }
    }, [columnVisibility]);

    return (
        <>
            {
                <DataGrid
                    apiRef={apiRef}
                    autoPageSize={autoPageSize}
                    density={density}
                    hideFooterSelectedRowCount={hideFooterSelectedRowCount}
                    loading={isLoading}
                    columns={columns}
                    rows={gridRows ?? []}
                    rowSelectionModel={selectedRows}
                    onRowSelectionModelChange={(newSelectionModel) => {
                        setSelectedRows(newSelectionModel);
                    }}
                    slots={{
                        loadingOverlay: LinearProgress
                    }}
                    initialState={{
                        columns: {
                            ...columns,
                            columnVisibilityModel: {
                                ...columnVisibility
                            }
                        }
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
