import * as React from 'react';
import {
    TreeView as MTreeView,
    TreeViewProps as MTreeViewProps
} from '@mui/x-tree-view';

export type TreeViewProps<Multiple extends boolean | undefined> = MTreeViewProps<Multiple>

function TreeView<Multiple extends boolean | undefined>({
    children,
    ...others
}: TreeViewProps<Multiple>): JSX.Element {
    return <MTreeView {...others}>{children}</MTreeView>;
}

export default TreeView;
