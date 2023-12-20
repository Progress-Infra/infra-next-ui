import * as React from 'react';
import {
    TabScrollButton as MTabScrollButton,
    TabScrollButtonProps as MTabScrollButtonProps
} from '@mui/material';

export type TabScrollButtonProps = MTabScrollButtonProps

function TabScrollButton({
    children,
    ...others
}: TabScrollButtonProps): JSX.Element {
    return <MTabScrollButton {...others}>{children}</MTabScrollButton>;
}

export default TabScrollButton;
