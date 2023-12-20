export type FilterListOperatorType = "in" | "notIn";

export interface FilterListItemProps {
    id: number | string,
    count?: number,
    label: string
}

export interface FilterListValueProps {
    operator: FilterListOperatorType,
    selected: (number | string)[]
}

export interface FilterListChangeEventProps {
    param: string,
    value: FilterListValueProps
}

export interface FilterSearchChangeEventProps {
    param: string,
    value: string
}

export interface FilterTreeChangeEventProps {
    param: string,
    value: number | string
}

export interface FilterToggleChangeEventProps {
    param: string,
    value: (number | string)[]
}

export interface FilterListProps {
    type: "list",
    param: string,
    label: string,
    list: FilterListItemProps[],
    onChange?: (e: FilterListChangeEventProps) => void,
    onDelete?: (e: string) => void,
    value?: FilterListValueProps
}

export interface FilterSearchProps {
    type: "search",
    param: string,
    onChange?: (e: FilterSearchChangeEventProps) => void,
    value?: string
}

export interface FilterToggleProps {
    type: "toggle",
    param: string,
    onChange?: (e: FilterToggleChangeEventProps) => void,
    toggles: {
        iconColor?: "error" | "success" | "warning" | "inherit",
        iconKey?: string,
        id: number | string,
        label: string
    }[],
    value?: (number | string)[]
}

export interface FilterTreeProps {
    type: "tree",
    param: string,
    nodes: {
        iconKey?: string,
        id: number | string,
        label: string,
        param?: string,
        parentId?: number | string
    }[]
    onChange?: (e: FilterTreeChangeEventProps) => void,
    placeholder?: string,
    value?: number | string
}

export type FilterProps = (FilterListProps | FilterSearchProps | FilterToggleProps | FilterTreeProps)[]