import * as React from 'react';
import { FilterListProps } from '../../data/filters/common';
import { Button } from '../../commands';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../viz';
import { Menu, MenuItem } from '@mui/material';

export interface StorePageFilterSelectorProps {
    items: FilterListProps[];
    onChange?: (e: FilterListProps) => void;
}

function StorePageFilterSelector({
    items,
    onChange
}: StorePageFilterSelectorProps) {
    const { t } = useTranslation('nui'),
        [anchor, setAnchor] = React.useState<HTMLElement | null>(null);

    return (
        <>
            <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    setAnchor(e.currentTarget);
                }}
                startIcon={<Icon faKey="plus" />}
            >
                {t('command.filter.add')}
            </Button>
            <Menu
                anchorEl={anchor}
                onClose={() => {
                    setAnchor(null);
                }}
                open={!!anchor}
            >
                {items.map((i) => (
                    <MenuItem
                        key={i.param}
                        onClick={() => {
                            onChange && onChange(i);
                            setAnchor(null);
                        }}
                    >
                        {i.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default StorePageFilterSelector;
