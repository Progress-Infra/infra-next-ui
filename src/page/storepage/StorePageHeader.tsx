import * as React from 'react';
import {
    FilterArgs,
    FilterListChangeEventProps,
    FilterListOperatorType,
    FilterListProps,
    FilterProps,
    FilterSearchChangeEventProps,
    FilterSearchProps,
    FilterToggleChangeEventProps,
    FilterToggleProps,
    FilterTreeChangeEventProps,
    FilterTreeProps
} from '../../data/filters/common';
import StatusChip, { StatusChipProps } from '../../viz/StatusChip';
import { Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FilterValue, RowCount } from './StorePageState';
import TreeFilter from '../../data/filters/TreeFilter';
import ToggleFilter from '../../data/filters/ToggleFilter';
import ListFilter from '../../data/filters/ListFilter';
import SearchFilter from '../../data/filters/SearchFilter';
import { useTranslation } from 'react-i18next';
import StorePageFilterSelector from './StorePageFilterSelector';
import { Button } from '../../commands';

export type StorePageHeaderProps = {
    filters?: FilterProps;
    onFilterChange?: (e: object) => void;
    status?: StatusChipProps;
    statusApi?: (args: object) => Promise<StatusChipProps>;
    title: string;
};

function StorePageHeader({
    filters,
    onFilterChange,
    status,
    statusApi,
    title
}: StorePageHeaderProps) {
    const [qs, setQS] = useSearchParams(),
        [navFilter, setNavFilter] = React.useState<FilterTreeProps | null>(
            null
        ),
        [statusFilter, setStatusFilter] =
            React.useState<FilterToggleProps | null>(null),
        [visibleFilters, setVisibleFilters] = React.useState<FilterListProps[]>(
            []
        ),
        [hiddenFilters, setHiddenFilters] = React.useState<FilterListProps[]>(
            []
        ),
        [searchFilter, setSearchFilter] =
            React.useState<FilterSearchProps | null>(null),
        [filterValue, setFilterValue] = useRecoilState(FilterValue),
        recordCount = useRecoilValue(RowCount),
        [statusResult, setStatusResult] = React.useState<
            StatusChipProps | undefined
        >(status),
        { t } = useTranslation('nui');

    React.useEffect(() => {
        const visible: (FilterListProps | FilterListProps)[] = [],
            hidden: FilterListProps[] = [],
            filterVal: FilterArgs = {};

        filters &&
            filters.forEach((f) => {
                switch (f.type) {
                    case 'list': {
                        const listQS = qs.get(f.param);
                        let listValue = f.value;

                        if (listQS) {
                            const listQSArray = listQS.split('|'),
                                op =
                                    listQSArray.shift() as FilterListOperatorType;

                            listValue = {
                                type: 'list',
                                operator: op,
                                value: listQSArray.map((s) => parseInt(s) || s)
                            };
                        }

                        if (listValue) {
                            visible.push({
                                ...f,
                                ...{
                                    value: listValue,
                                    onChange: (
                                        e: FilterListChangeEventProps
                                    ) => {
                                        const changeListQS = [
                                            e.value.operator,
                                            ...e.value.value
                                        ].join('|');

                                        qs.set(e.param, changeListQS);
                                        setQS(qs);

                                        f.onChange && f.onChange(e);
                                    },
                                    onDelete: (e: string) => {
                                        qs.delete(e);
                                        setQS(qs);

                                        f.onDelete && f.onDelete(e);
                                    }
                                }
                            });

                            filterVal[f.param] = listValue;
                        } else {
                            hidden.push(f);
                            delete filterVal[f.param];
                        }

                        break;
                    }
                    case 'search':
                        setSearchFilter({
                            ...f,
                            ...{
                                value: f.value || qs.get(f.param) || undefined,
                                onChange: (e: FilterSearchChangeEventProps) => {
                                    if (e.value.trim()) {
                                        qs.set(e.param, e.value);
                                    } else {
                                        qs.delete(e.param);
                                    }

                                    setQS(qs);
                                    f.onChange && f.onChange(e);
                                }
                            }
                        });

                        if (f.value?.trim()) {
                            filterVal[f.param] = {
                                type: 'search',
                                value: f.value
                            };
                        } else {
                            delete filterVal[f.param];
                        }

                        break;
                    case 'toggle': {
                        const toggleQS = qs.get(f.param);
                        let toggleValue = f.value;

                        if (toggleQS) {
                            toggleValue = toggleQS
                                .split('|')
                                .map((t) => parseInt(t) || t);
                        }

                        setStatusFilter({
                            ...f,
                            ...{
                                value: toggleValue,
                                onChange: (e: FilterToggleChangeEventProps) => {
                                    if (e.value.length) {
                                        qs.set(e.param, e.value.join('|'));
                                    } else {
                                        qs.delete(e.param);
                                    }

                                    setQS(qs);
                                }
                            }
                        });

                        break;
                    }
                    case 'tree':
                        setNavFilter({
                            ...f,
                            ...{
                                value: f.value || qs.get(f.param) || undefined,
                                onChange: (e: FilterTreeChangeEventProps) => {
                                    //todo: update other params as needed

                                    qs.set(e.param, e.value.toString());
                                    setQS(qs);

                                    f.onChange && f.onChange(e);
                                },
                                onDelete: (e: string) => {
                                    //todo: update other params as needed

                                    qs.delete(e);
                                    setQS(qs);

                                    f.onDelete && f.onDelete(e);
                                }
                            }
                        });

                        break;
                    default:
                        break;
                }
            });

        setVisibleFilters(visible);
        setHiddenFilters(hidden);
        setFilterValue(filterVal);
        onFilterChange && onFilterChange(filterVal);
    }, [qs]);

    React.useEffect(() => {
        if (statusApi) {
            statusApi(filterValue || {}).then((result) => {
                setStatusResult(result);
            });
        }
    }, [filterValue]);

    return (
        <Stack spacing={2}>
            {navFilter && <TreeFilter {...navFilter} />}
            <Stack direction="row" spacing={2}>
                <Typography component="h2" variant="h5">
                    {`${title} ${
                        recordCount === null
                            ? ''
                            : `(${recordCount.toLocaleString()})`
                    }`}
                </Typography>
                {statusResult && <StatusChip {...statusResult} />}
            </Stack>
            {(statusFilter ||
                hiddenFilters.length ||
                visibleFilters.length ||
                searchFilter) && (
                <Stack direction="row" spacing={2} sx={{ width: 1 }}>
                    {statusFilter && <ToggleFilter {...statusFilter} />}
                    {visibleFilters.map((f) => (
                        <ListFilter key={f.param} {...f} />
                    ))}
                    {hiddenFilters.length ? (
                        <StorePageFilterSelector
                            items={hiddenFilters}
                            onChange={(e: FilterListProps) => {
                                qs.set(e.param, e.value?.operator || 'in');
                                setQS(qs);
                            }}
                        />
                    ) : (
                        <></>
                    )}
                    <div style={{ flexGrow: 1 }} />
                    {searchFilter && <SearchFilter {...searchFilter} />}
                    <Button
                        onClick={() => {
                            for (const k of qs.keys()) {
                                qs.delete(k);
                            }

                            setQS(qs);
                        }}
                    >
                        {t('command.filter.reset')}
                    </Button>
                </Stack>
            )}
        </Stack>
    );
}

export default StorePageHeader;
