import * as React from 'react';
import { Icon as MIcon, IconProps as MIconProps } from '@mui/material';

export type IconProps = MIconProps & {
    faKey: string;
};

function Icon({
    faKey,
    children,
    fontSize = 'small',
    ...others
}: IconProps): JSX.Element {
    return (
        <MIcon {...others} baseClassName={`fa fa-${faKey}`} fontSize={fontSize}>
            {children}
        </MIcon>
    );
}

export default Icon;
