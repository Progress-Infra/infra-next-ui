import * as React from 'react';
import {
    AvatarGroup as MAvatarGroup,
    AvatarGroupProps as MAvatarGroupProps
} from '@mui/material';

export type AvatarGroupProps = MAvatarGroupProps;

function AvatarGroup({ children, ...others }: AvatarGroupProps): JSX.Element {
    return <MAvatarGroup {...others}>{children}</MAvatarGroup>;
}

export default AvatarGroup;
