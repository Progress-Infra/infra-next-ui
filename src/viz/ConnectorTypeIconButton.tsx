import React from 'react';
import { Icon, Typography } from '.';
import IconButton from '@mui/material/IconButton';
import { SxProps, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export type ConnectorType =
    | 'connector'
    | 'loadmaster'
    | 'loadmasterha'
    | 'wuginstance';

export type ConnectorTypeIconButtonProps = SxProps<Theme> & {
    connectorType: ConnectorType;
};

const ConnectorTypeIconButton: React.FC<ConnectorTypeIconButtonProps> = ({
    connectorType
}) => {
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
        <IconButton
            sx={{
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left'
            }}
        >
            <Icon faKey={iconKey} sx={{ fontSize: 12 }} />
            <Typography sx={{ ml: 0.5, fontSize: 14 }}>{label}</Typography>
        </IconButton>
    );
};

export default ConnectorTypeIconButton;
