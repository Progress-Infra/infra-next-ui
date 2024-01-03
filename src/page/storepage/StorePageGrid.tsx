import {
    DataGrid,
    DataGridProps,
    GridColDef,
    GridPaginationModel,
    useGridApiRef
} from '@mui/x-data-grid';
import * as React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    FilterValue,
    GridColumnVisibility,
    GridSelection,
    RecordCount
} from './StorePageState';
import { Alert, LinearProgress, Snackbar } from '@mui/material';
import { FilterArgs } from '../../data/filters/common';

type omittedProps =
    | 'columns'
    | 'disableColumnMenu'
    | 'filterMode'
    | 'paginationMode'
    | 'rows';

export type GridColumn = GridColDef & {
    hidden?: boolean;
};

export type StorePageGridProps = Omit<DataGridProps, omittedProps> & {
    columns: GridColumn[];
    countApi?: (args: FilterArgs) => Promise<number>;
    rows?: object[];
    rowsApi?: (args: object) => Promise<object[]>;
};

function StorePageGrid({
    autoPageSize = true,
    countApi,
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
        [recordCount, setRecordCount] = useRecoilState(RecordCount),
        [selectedRows, setSelectedRows] = useRecoilState(GridSelection),
        [isLoading, setIsLoading] = React.useState<boolean>(!!loading),
        [errMessage, setErrMessage] = React.useState<string | null>(null),
        [paging, setPaging] = React.useState<GridPaginationModel | null>(null),
        apiRef = useGridApiRef();

    React.useEffect(() => {
        if (rowsApi && filterValue && paging) {
            setIsLoading(true);

            rowsApi({
                filters: filterValue,
                paging: paging
            })
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
    }, [rowsApi, filterValue, paging]);

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

    React.useEffect(() => {
        if (countApi) {
            countApi(filterValue || {}).then((result) => {
                setRecordCount(result);
            });
        }
    }, [filterValue]);

    React.useEffect(() => {
        if (rows && !countApi) {
            setRecordCount(rows.length);
        }
    }, [rows, countApi]);

    return (
        <>
            {
                <DataGrid
                    {...others}
                    apiRef={apiRef}
                    autoPageSize={autoPageSize}
                    columns={columns}
                    density={density}
                    disableColumnMenu
                    filterMode={rowsApi ? 'server' : 'client'}
                    hideFooterSelectedRowCount={hideFooterSelectedRowCount}
                    loading={isLoading}
                    rowCount={recordCount || 0}
                    rows={gridRows ?? []}
                    rowSelectionModel={selectedRows}
                    paginationMode={rowsApi ? 'server' : 'client'}
                    initialState={{
                        columns: {
                            ...columns,
                            columnVisibilityModel: {
                                ...columnVisibility
                            }
                        }
                    }}
                    onRowSelectionModelChange={(newSelectionModel) => {
                        setSelectedRows(newSelectionModel);
                    }}
                    onPaginationModelChange={(model) => {
                        setPaging(model);
                    }}
                    slots={{
                        loadingOverlay: LinearProgress
                    }}
                />
            }
            <Snackbar
                autoHideDuration={10000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={!!errMessage}
                onClose={(_, reason) => {
                    if (reason === 'timeout') {
                        setErrMessage(null);
                    }
                }}
            >
                <Alert severity="error" variant="filled">
                    {errMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default StorePageGrid;
