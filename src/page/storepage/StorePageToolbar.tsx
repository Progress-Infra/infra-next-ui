import { Stack, Toolbar } from '@mui/material';
import * as React from 'react';
import StorePageTool from './StorePageTool';
import { Button } from '../../commands';
import { Icon } from '../../viz';
import { useTranslation } from 'react-i18next';

interface ToolProps {
    iconKey?: string;
    disabled?: boolean;
    label?: string;
    requiresRow?: boolean;
    onClick?: () => void;
}

export interface ToolsProps extends ToolProps {
    children?: ToolProps[];
}

export type StorePageToolbarProps = {
    tools?: ToolsProps[];
};

function StorePageToolbar({ tools }: StorePageToolbarProps) {
    const { t } = useTranslation('nui');

    return (
        <Toolbar disableGutters>
            <Stack direction="row" spacing={2} sx={{ width: 1 }}>
                {tools &&
                    tools.map((p, i) => (
                        <StorePageTool {...p} isPrimary={!i} key={`tool${i}`} />
                    ))}
                <div style={{ flexGrow: 1 }} />
                <Button
                    endIcon={<Icon faKey="angle-down" />}
                    startIcon={<Icon faKey="object-group" />}
                >
                    {t('command.grid.groups')}
                </Button>
                <Button
                    endIcon={<Icon faKey="angle-down" />}
                    startIcon={<Icon faKey="arrow-up-a-z" />}
                >
                    {t('command.grid.sorting')}
                </Button>
                <Button
                    endIcon={<Icon faKey="angle-down" />}
                    startIcon={<Icon faKey="table-columns" />}
                >
                    {t('command.grid.columns')}
                </Button>
            </Stack>
        </Toolbar>
    );
}

export default StorePageToolbar;