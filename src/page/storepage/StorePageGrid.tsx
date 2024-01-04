import {
    DataGrid,
    DataGridProps,
    GridColDef,
    useGridApiRef
} from '@mui/x-data-grid';
import * as React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
    FetchArgs,
    FilterValue,
    GridColumnVisibility,
    GridSelection,
    Paging,
    RowCount,
    Sorting
} from './StorePageState';
import { Alert, LinearProgress, Snackbar } from '@mui/material';
import { ApiArgs, FilterArgs } from '../../data/filters/common';

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
    rowsApi?: (args: ApiArgs) => Promise<object[]>;
};

function StorePageGrid({
    autoPageSize = true,
    columns,
    countApi,
    density = 'compact',
    hideFooterSelectedRowCount = true,
    loading,
    onPaginationModelChange,
    onRowSelectionModelChange,
    onSortModelChange,
    rows,
    rowsApi,
    ...others
}: StorePageGridProps) {
    const [gridRows, setGridRows] = React.useState<object[]>(rows || []),
        filterValue = useRecoilValue(FilterValue),
        setPaging = useSetRecoilState(Paging),
        setSorting = useSetRecoilState(Sorting),
        fetchArgs = useRecoilValue(FetchArgs),
        columnVisibility = useRecoilValue(GridColumnVisibility),
        [rowCount, setRowCount] = useRecoilState(RowCount),
        [selectedRows, setSelectedRows] = useRecoilState(GridSelection),
        [isLoading, setIsLoading] = React.useState<boolean>(!!loading),
        [errMessage, setErrMessage] = React.useState<string | null>(null),
        apiRef = useGridApiRef();

    React.useEffect(() => {
        if (countApi && filterValue) {
            countApi(filterValue).then((result) => {
                setRowCount(result);
            });
        }
    }, [filterValue]);

    React.useEffect(() => {
        if (rowsApi && fetchArgs) {
            setIsLoading(true);

            rowsApi(fetchArgs)
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
    }, [fetchArgs]);

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
        if (rows && !countApi) {
            setRowCount(rows.length);
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
                    rowCount={rowCount || 0}
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
                    onPaginationModelChange={(model, details) => {
                        setPaging(model);
                        onPaginationModelChange &&
                            onPaginationModelChange(model, details);
                    }}
                    onRowSelectionModelChange={(newSelectionModel, details) => {
                        setSelectedRows(newSelectionModel);
                        onRowSelectionModelChange &&
                            onRowSelectionModelChange(
                                newSelectionModel,
                                details
                            );
                    }}
                    onSortModelChange={(model, details) => {
                        setSorting(model);
                        onSortModelChange && onSortModelChange(model, details);
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
