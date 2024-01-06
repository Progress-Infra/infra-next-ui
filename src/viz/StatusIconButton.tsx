import React from 'react';
import { Icon, Tooltip, Typography } from '.';
import IconButton from '@mui/material/IconButton';
import { SxProps, Theme, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CircularProgress from './CircularProgress';

export type StatusType =
    | 'success'
    | 'healthy'
    | 'reachable'
    | 'unreachable'
    | 'processing'
    | 'error'
    | 'warning'
    | 'unknown';

export type StatusIconButtonProps = SxProps<Theme> & {
    statusType: StatusType;
    statusText?: string;
    incidentLink?: string;
};

// Define a styled component for the oval-shaped box
const OvalBox = styled('div')({
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    minWidth: 125,
    height: 25,
    borderRadius: 30,
    color: 'white'
});

const StatusIconButton: React.FC<StatusIconButtonProps> = ({
    statusType,
    statusText,
    incidentLink
}) => {
    const { t } = useTranslation('nui'),
        label = statusText
            ? t(statusText)
            : t(`label.statusType.${statusType}`),
        incidentText = t('label.openIncident'),
        showIncidentLink =
            incidentLink &&
            (statusType === 'error' || statusType === 'unreachable');

    let icon, backgroundColor;

    switch (statusType) {
        case 'healthy':
        case 'reachable':
        case 'success':
            backgroundColor = '#006600';
            icon = (
                <Icon
                    faKey="circle"
                    sx={{
                        color: '#00FF00',
                        fontSize: 12
                    }}
                />
            );
            break;
        case 'unreachable':
        case 'error':
            backgroundColor = '#990000';
            icon = (
                <Icon
                    faKey="circle"
                    sx={{
                        color: '#FF0000',
                        fontSize: 12
                    }}
                />
            );
            break;
        case 'processing':
            backgroundColor = '#FFCC66';
            icon = <CircularProgress size={14} thickness={5} />;
            break;
        case 'unknown':
        case 'warning':
            backgroundColor = '#996633';
            icon = (
                <Icon
                    faKey="circle"
                    sx={{
                        color: '#CC9900',
                        fontSize: 12
                    }}
                />
            );
            break;
        default:
            icon = null;
    }

    return (
        <OvalBox
            sx={{
                backgroundColor: backgroundColor,
                width: '100%'
            }}
        >
            <Tooltip title={label}>
                <IconButton
                    sx={{
                        backgroundColor: backgroundColor
                    }}
                >
                    {icon}
                </IconButton>
            </Tooltip>
            <Tooltip title={label}>
                <Typography
                    sx={{
                        ml: 0.2,
                        mt: 0.2,
                        mr: 0,
                        fontSize: 14,
                        backgroundColor: backgroundColor
                    }}
                >
                    {label}
                </Typography>
            </Tooltip>
            {showIncidentLink && (
                <Tooltip title={incidentText}>
                    {/* TODO: add link to incident center  */}
                    <IconButton
                        sx={{
                            backgroundColor: backgroundColor
                        }}
                    >
                        <Icon
                            faKey="chevron-right"
                            sx={{
                                ml: 0,
                                color: '#FFFFFF',
                                fontSize: 12
                            }}
                        />
                    </IconButton>
                </Tooltip>
            )}
        </OvalBox>
    );
};

export default StatusIconButton;
