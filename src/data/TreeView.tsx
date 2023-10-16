import * as React from "react";
import { TreeView as MTreeView, TreeViewProps as MTreeViewProps } from "@mui/x-tree-view";

export interface TreeViewProps<Multiple extends boolean | undefined> extends MTreeViewProps<Multiple> { }

function TreeView<Multiple extends boolean | undefined>({ children, ...others }: TreeViewProps<Multiple>): JSX.Element {
    return (
        <MTreeView
            {...others}
        >
            {children}
        </MTreeView>
    )
}

export default TreeView;