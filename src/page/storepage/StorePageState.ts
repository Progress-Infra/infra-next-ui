import {
    GridColumnVisibilityModel,
    GridRowSelectionModel
} from '@mui/x-data-grid';
import { atom, selector } from 'recoil';
import {
    ApiArgs,
    FilterArgs,
    PagingProps,
    SortProps
} from '../../data/filters/common';

export const FetchArgs = selector<ApiArgs | null>({
        key: 'FetchArgs',
        get: ({ get }) => {
            const filters = get(FilterValue),
                paging = get(Paging),
                sorting = get(Sorting);

            return filters && paging && sorting
                ? {
                      filters: filters,
                      paging: paging,
                      sorting: sorting
                  }
                : null;
        }
    }),
    FilterValue = atom<FilterArgs | null>({
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
    Paging = atom<PagingProps | null>({
        key: 'Paging',
        default: null
    }),
    RowCount = atom<number | null>({
        key: 'RowCount',
        default: null
    }),
    Sorting = atom<SortProps | null>({
        key: 'Sorting',
        default: null
    }),
    StorageKey = atom<string | null>({
        key: 'StorageKey',
        default: null
    });
