import * as React from 'react';
import {
    GridColDef,
    DataGrid as MDataGrid,
    DataGridProps as MDataGridProps
} from '@mui/x-data-grid';

export type GridColumn = GridColDef & {
    hidden?: boolean;
};

export type DataGridProps = MDataGridProps & {
    columns: GridColumn[];
};

function DataGrid(props: DataGridProps): JSX.Element {
    return <MDataGrid {...props} />;
}

export default DataGrid;
