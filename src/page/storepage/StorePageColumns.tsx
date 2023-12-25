import React, { useState } from 'react';
import { Box, FormControlLabel, Popover, Switch } from '@mui/material';
import { Icon } from '../../viz';
import { useTranslation } from 'react-i18next';
import { GridColumnVisibility } from './StorePageState';
import { useRecoilState } from 'recoil';
import { GridColumn } from './StorePageGrid';
import { Button } from '../../commands';

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

    const open = Boolean(anchorEl);
    const id = open ? 'store-page-columns-popover' : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
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
                        columns
                            .filter((o) => o.headerName && o.field)
                            .map((col) => (
                                <FormControlLabel
                                    control={
                                        <Switch
                                            disabled={
                                                col.hideable === undefined
                                                    ? false
                                                    : !col.hideable
                                            }
                                            checked={
                                                columnVisibility &&
                                                col.field in columnVisibility
                                                    ? columnVisibility[
                                                          col.field
                                                      ]
                                                    : col.hidden === undefined
                                                      ? true
                                                      : !col.hidden
                                            }
                                            onChange={(_e, checked) =>
                                                setColumnVisibility(
                                                    (prevValue) => {
                                                        const newColVisibility =
                                                            { ...prevValue } ??
                                                            {};
                                                        newColVisibility[
                                                            col.field
                                                        ] = checked;
                                                        return newColVisibility;
                                                    }
                                                )
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
