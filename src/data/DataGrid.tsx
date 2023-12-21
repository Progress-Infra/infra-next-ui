import * as React from 'react';
import {
    DataGrid as MDataGrid,
    DataGridProps as MDataGridProps
} from '@mui/x-data-grid';

export type DataGridProps = MDataGridProps;

function DataGrid(props: DataGridProps): JSX.Element {
    return <MDataGrid {...props} />;
}

export default DataGrid;
