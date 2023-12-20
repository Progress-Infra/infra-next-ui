import * as React from 'react';
import { FilterToggleProps } from './common';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Icon from '../../viz/Icon';

function ToggleFilter({ onChange, param, toggles, value }: FilterToggleProps) {
    return (
        <ToggleButtonGroup
            onChange={(
                _: React.MouseEvent<HTMLElement>,
                newValue: (number | string)[]
            ) => {
                onChange &&
                    onChange({
                        param: param,
                        value: newValue
                    });
            }}
            value={value}
        >
            {toggles.map((t) => (
                <ToggleButton key={t.label} value={t.id}>
                    {t.iconKey && (
                        <Icon
                            faKey={t.iconKey}
                            color={t.iconColor}
                            sx={{ mr: 1 }}
                        />
                    )}
                    {t.label}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}

export default ToggleFilter;
