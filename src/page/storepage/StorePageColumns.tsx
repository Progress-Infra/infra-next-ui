import React, { useState } from 'react';
import { Box, Button, FormControlLabel, Popover, Switch } from '@mui/material';
import { Icon } from '../../viz';
import { useTranslation } from 'react-i18next';
import { GridColumnVisibility } from './StorePageState';
import { useRecoilState } from 'recoil';
import { GridColumn } from './StorePageGrid';

export type StorePageColumnsProps = {
    columns?: GridColumn[];
};

function StorePageColumns(props: StorePageColumnsProps): JSX.Element {
    const { columns } = props,
        [columnVisibility, setColumnVisibility] =
            useRecoilState(GridColumnVisibility),
        [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null),
        { t } = useTranslation('nui');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = (colKey: string, checked: boolean) => () => {
        // Set new data in recoil
        const newColVisibility = columnVisibility ?? {};
        newColVisibility[colKey] === checked;
        setColumnVisibility(newColVisibility);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'store-page-columns-popover' : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                endIcon={<Icon faKey="angle-down" />}
                startIcon={<Icon faKey="table-columns" />}
            >
                {t('command.grid.columns')}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        maxHeight: 300,
                        overflow: 'auto'
                    }}
                >
                    {columns &&
                        columns.map((col) => (
                            <FormControlLabel
                                control={
                                    <Switch
                                        disabled={
                                            col.hideable === undefined
                                                ? false
                                                : !col.hideable
                                        }
                                        checked={
                                            col.hidden === undefined
                                                ? true
                                                : col.hidden
                                        }
                                        onChange={(e, checked) =>
                                            handleToggle(col.field, checked)
                                        }
                                        inputProps={{
                                            'aria-labelledby': `checkbox-list-label-${col.field}`
                                        }}
                                    />
                                }
                                label={col.headerName}
                                key={col.field}
                            />
                        ))}
                </Box>
            </Popover>
        </div>
    );
}

export default StorePageColumns;
