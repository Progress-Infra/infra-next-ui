import * as React from 'react';
import {
    MenuList as MMenuList,
    MenuListProps as MMenuListProps
} from '@mui/material';

export type MenuListProps = MMenuListProps;

function MenuList({ children, ...others }: MenuListProps): JSX.Element {
    return <MMenuList {...others}>{children}</MMenuList>;
}

export default MenuList;
