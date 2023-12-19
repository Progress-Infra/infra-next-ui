import { GridRowSelectionModel } from "@mui/x-data-grid";
import { atom } from "recoil";

export const
    FilterValue = atom<object | null>({
        key: "FilterValue",
        default: null
    }),
    GridSelection = atom<GridRowSelectionModel | null>({
        key: "GridSelection",
        default: null
    }),
    StorageKey = atom<string | null>({
        key: "StorageKey",
        default: null
    });