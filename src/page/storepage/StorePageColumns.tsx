import React, { useState } from 'react';
import { Box, Button, FormControlLabel, Popover, Switch } from '@mui/material';
import { Icon } from '../../viz';
import { useTranslation } from 'react-i18next';
import { GridColumns } from './StorePageState';
import { useRecoilState } from 'recoil';
import { GridColumn } from './StorePageGrid';

export type StorePageColumnsProps = {
    columns?: GridColumn[];
};

function StorePageColumns(props: StorePageColumnsProps): JSX.Element {
    const { columns } = props,
        [gridColumns, setGridColumns] = useRecoilState(GridColumns),
        [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null),
        { t } = useTranslation('nui');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = (colKey: string, checked: boolean) => () => {
        const colData = structuredClone(gridColumns ?? []);
        // Lookup column item in recoil data
        let colItem = colData.find((o) => o.field === colKey);
        if (colItem) {
            colItem.hidden = checked;
        }
        // if no stored value in recoil, then get default value
        // and add to recoil storage with newly set hidden prop value
        else {
            colItem = columns?.find((o) => o.field === colKey);
            colData.push(colItem ?? { field: colKey, hidden: checked });
        }
        // Set new data in recoil
        setGridColumns(colData);
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
                        columns
                            .filter(
                                (col) =>
                                    col.hideable === undefined || col.hideable
                            )
                            .map((col) => (
                                <FormControlLabel
                                    control={
                                        <Switch
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
