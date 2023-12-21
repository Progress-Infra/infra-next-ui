import * as React from 'react';
import {
    FilterListChangeEventProps,
    FilterListItemProps,
    FilterListOperatorType,
    FilterListProps
} from './common';
import { useTranslation } from 'react-i18next';
import Button from '../../commands/Button';
import Icon from '../../viz/Icon';
import {
    Autocomplete,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Popover,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function ListFilter({
    param,
    label,
    list,
    onChange,
    onDelete,
    value = {
        operator: 'in',
        selected: []
    }
}: FilterListProps) {
    const { t } = useTranslation('nui'),
        [text, setText] = React.useState<string>(''),
        [anchor, setAnchor] = React.useState<HTMLElement | null>(null),
        [iconKey, setIconKey] = React.useState<string>('angle-down'),
        [selected, setSelected] = React.useState<FilterListItemProps[]>([]);

    React.useEffect(() => {
        const found: FilterListItemProps[] = [];

        value.selected.forEach((s) => {
            const item = list.find((l) => l.id === s);

            if (item) {
                found.push(item);
            }
        });

        setSelected(found);
    }, [value, list, setSelected]);

    React.useEffect(() => {
        if (selected.length) {
            setText(`${label}: ${selected.map((s) => s.label).join(', ')}`);
        } else {
            setText(label);
        }
    }, [selected, setText, label]);

    React.useEffect(() => {
        setIconKey(anchor ? 'angle-up' : 'angle-down');
    }, [setIconKey, anchor]);

    return (
        <>
            <Button
                endIcon={<Icon faKey={iconKey} />}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    setAnchor(e.currentTarget);
                }}
            >
                {text}
            </Button>
            <Popover
                anchorEl={anchor}
                open={!!anchor}
                onClose={() => {
                    setAnchor(null);
                }}
            >
                <Stack spacing={2} sx={{ p: 2, width: 300 }}>
                    <FormControl fullWidth>
                        <FormLabel>{label}</FormLabel>
                        <RadioGroup
                            row
                            value={value.operator}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const change = {
                                    param: param,
                                    value: {
                                        ...value,
                                        ...{
                                            operator: e.target
                                                .value as FilterListOperatorType
                                        }
                                    }
                                };

                                onChange && onChange(change);
                            }}
                        >
                            <FormControlLabel
                                control={<Radio />}
                                label={t('label.filter.is')}
                                value="in"
                            />
                            <FormControlLabel
                                control={<Radio />}
                                label={t('label.filter.not')}
                                value="notIn"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Autocomplete
                        autoComplete
                        autoHighlight
                        autoSelect
                        disableCloseOnSelect
                        filterSelectedOptions
                        fullWidth
                        multiple
                        options={list}
                        value={selected}
                        onChange={(
                            _: React.SyntheticEvent,
                            newValue: FilterListItemProps[]
                        ) => {
                            const change = {
                                param: param,
                                value: {
                                    ...value,
                                    ...{
                                        selected: newValue.map((v) => v.id)
                                    }
                                }
                            };

                            onChange &&
                                onChange(
                                    change as unknown as FilterListChangeEventProps
                                );
                        }}
                        renderInput={(args) => (
                            <TextField
                                {...args}
                                placeholder={t('label.filter.list.placeholder')}
                            />
                        )}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                                <Stack direction="row" spacing={1}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        checked={selected}
                                    />
                                    <div style={{ flexGrow: 1 }}>
                                        {option.label}
                                    </div>
                                    {option.count === undefined ? null : (
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            {option.count.toLocaleString()}
                                        </Typography>
                                    )}
                                </Stack>
                            </li>
                        )}
                    />
                    <Stack direction="row">
                        <div style={{ flexGrow: 1 }} />
                        <Button
                            onClick={() => {
                                onDelete && onDelete(param);
                            }}
                            startIcon={<Icon faKey="trash" />}
                        >
                            {t('command.delete')}
                        </Button>
                    </Stack>
                </Stack>
            </Popover>
        </>
    );
}

export default ListFilter;
