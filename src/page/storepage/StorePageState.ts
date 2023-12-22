import { GridRowSelectionModel } from '@mui/x-data-grid';
import { atom } from 'recoil';
import { GridColumn } from './StorePageGrid';

export const FilterValue = atom<object | null>({
        key: 'FilterValue',
        default: null
    }),
    GridSelection = atom<GridRowSelectionModel | null>({
        key: 'GridSelection',
        default: null
    }),
    GridColumns = atom<GridColumn[] | null>({
        key: 'GridColumns',
        default: null
    }),
    StorageKey = atom<string | null>({
        key: 'StorageKey',
        default: null
    });
