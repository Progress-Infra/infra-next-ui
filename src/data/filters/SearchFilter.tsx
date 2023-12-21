import * as React from 'react';
import { FilterSearchProps } from './common';
import { IconButton, TextField } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function SearchFilter({ onChange, param, value }: FilterSearchProps) {
    let timer: ReturnType<typeof setTimeout>;

    const { t } = useTranslation(),
        [search, setSearch] = React.useState<string | undefined>(value),
        cancelTimer = () => {
            if (timer) {
                clearTimeout(timer);
            }
        },
        handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const searchState = e.target.value;

            cancelTimer();
            setSearch(searchState);

            timer = setTimeout(() => {
                onChange &&
                    onChange({
                        param: param,
                        value: searchState ? searchState.trim() : searchState
                    });
            }, 500);
        },
        handleClear = () => {
            cancelTimer();
            setSearch('');
            onChange &&
                onChange({
                    param: param,
                    value: ''
                });
        };

    return (
        <TextField
            InputProps={{
                endAdornment: (
                    <IconButton
                        sx={{ visibility: search ? 'visible' : 'hidden' }}
                        onClick={handleClear}
                    >
                        <Clear />
                    </IconButton>
                ),
                startAdornment: <Search />
            }}
            onChange={handleChange}
            placeholder={t('label.filter.search.placeholder')}
            size="small"
            value={search}
        />
    );
}

export default SearchFilter;
