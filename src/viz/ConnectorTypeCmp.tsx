import React from 'react';
import { Icon, Typography } from '.';
import { Stack, SxProps, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export type ConnectorType =
    | 'connector'
    | 'loadmaster'
    | 'loadmasterha'
    | 'wuginstance';

export type ConnectorTypeProps = SxProps<Theme> & {
    connectorType: ConnectorType;
};

const ConnectorTypeCmp: React.FC<ConnectorTypeProps> = ({ connectorType }) => {
    const { t } = useTranslation('nui'),
        label = t(`label.connectorType.${connectorType}`);

    let iconKey: string;

    switch (connectorType) {
        case 'connector':
            iconKey = 'plug';
            break;
        case 'loadmaster':
        case 'loadmasterha':
            iconKey = 'tasks';
            break;
        case 'wuginstance':
            iconKey = 'gears';
            break;
        default:
            iconKey = 'question';
            break;
    }

    return (
        <Stack direction="row" spacing={1}>
            {/* TODO: Replace fontsize with theme */}
            <Icon faKey={iconKey} sx={{ fontSize: 12 }} />
            <Typography sx={{ ml: 0.5, fontSize: 14 }}>{label}</Typography>
        </Stack>
    );
};

export default ConnectorTypeCmp;
