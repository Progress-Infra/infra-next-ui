import {
    GridColumnVisibilityModel,
    GridRowSelectionModel
} from '@mui/x-data-grid';
import { atom } from 'recoil';
import { FilterArgs } from '../../data/filters/common';

export const FilterValue = atom<FilterArgs | null>({
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
    RecordCount = atom<number | null>({
        key: "RecordCount",
        default: null
    }),
    StorageKey = atom<string | null>({
        key: 'StorageKey',
        default: null
    });
