import * as React from "react";
import { TreeItem as MTreeItem, TreeItemProps as MTreeItemProps } from "@mui/x-tree-view";

export interface TreeItemProps extends MTreeItemProps { }

function TreeItem({ children, ...others }: TreeItemProps): JSX.Element {
    return (
        <MTreeItem
            {...others}
        >
            {children}
        </MTreeItem>
    )
}

export default TreeItem;