import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';

export type FilterListOperatorType = 'in' | 'notIn';

export interface FilterListItemProps {
    id: number | string;
    count?: number;
    label: string;
}

export interface FilterListChangeEventProps {
    param: string;
    value: FilterListArgs;
}

export interface FilterSearchChangeEventProps {
    param: string;
    value: string;
}

export interface FilterTreeChangeEventProps {
    param: string;
    value: number | string;
}

export interface FilterTreeNodeProps {
    iconKey?: string;
    id: number | string;
    label: string;
    param?: string;
    parentId?: number | string;
}

export interface FilterToggleChangeEventProps {
    param: string;
    value: (number | string)[];
}

export interface FilterListProps {
    type: 'list';
    param: string;
    label: string;
    list: FilterListItemProps[];
    onChange?: (e: FilterListChangeEventProps) => void;
    onDelete?: (e: string) => void;
    value?: FilterListArgs;
}

export interface FilterSearchProps {
    type: 'search';
    param: string;
    onChange?: (e: FilterSearchChangeEventProps) => void;
    value?: string;
}

export interface FilterToggleProps {
    type: 'toggle';
    param: string;
    onChange?: (e: FilterToggleChangeEventProps) => void;
    toggles: {
        iconColor?: 'error' | 'success' | 'warning' | 'inherit';
        iconKey?: string;
        id: number | string;
        label: string;
    }[];
    value?: (number | string)[];
}

export interface FilterTreeProps {
    type: 'tree';
    label: string;
    nodes: FilterTreeNodeProps[];
    onChange?: (e: FilterTreeChangeEventProps) => void;
    onDelete?: (e: string) => void;
    param: string;
    value?: number | string;
}

export type FilterProps = (
    | FilterListProps
    | FilterSearchProps
    | FilterToggleProps
    | FilterTreeProps
)[];

export interface FilterListArgs {
    type: 'list';
    operator: FilterListOperatorType;
    value: (number | string)[];
}

export interface FilterSearchArgs {
    type: 'search';
    value: string;
}

export interface FilterToggleArgs {
    type: 'toggle';
    value: (number | string)[];
}

export interface FilterTreeArgs {
    type: 'tree';
    value: {
        param: string;
        value: number | string;
    }[];
}

export type FilterArgs = {
    [key: string]:
        | FilterListArgs
        | FilterSearchArgs
        | FilterToggleArgs
        | FilterTreeArgs;
};

export type PagingProps = GridPaginationModel;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SortProps extends GridSortModel {}
export interface ApiArgs {
    filters: FilterArgs;
    paging: PagingProps;
    sorting: SortProps;
}
