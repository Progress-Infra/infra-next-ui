import {
    GridColumnVisibilityModel,
    GridRowSelectionModel
} from '@mui/x-data-grid';
import { atom } from 'recoil';

export const FilterValue = atom<object | null>({
        key: 'FilterValue',
        default: null
    }),
    GridSelection = atom<GridRowSelectionModel | undefined>({
        key: 'GridSelection',
        default: undefined
    }),
    GridColumnVisibility = atom<GridColumnVisibilityModel | null>({
        key: 'GridColumnVisibility',
        default: null
    }),
    StorageKey = atom<string | null>({
        key: 'StorageKey',
        default: null
    });
