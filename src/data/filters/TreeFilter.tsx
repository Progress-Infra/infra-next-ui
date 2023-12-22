import React from 'react';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import Icon from '../../viz/Icon';
import { FilterTreeNodeProps, FilterTreeProps } from './common';
import Button from '../../commands/Button';

function TreeFilter({
    label,
    nodes,
    onChange,
    onDelete,
    param,
    value
}: FilterTreeProps) {
    const [crumbs, setCrumbs] = React.useState<FilterTreeNodeProps[]>([]);

    React.useEffect(() => {
        const list: FilterTreeNodeProps[] = [];

        if (value) {
            const addCrumb = (id: string | number) => {
                const node = nodes.find((n) => n.id === id);

                if (node) {
                    if (node.parentId) {
                        addCrumb(node.parentId);
                    }

                    list.push(node);
                }
            };

            addCrumb(value);
        }

        setCrumbs(list);
    }, [nodes, value]);

    return (
        <Stack direction="row" spacing={1}>
            <Button
                endIcon={<Icon faKey="angle-down" />}
                startIcon={<Icon faKey="folder-tree" />}
            />
            <Breadcrumbs
                itemsBeforeCollapse={4}
                maxItems={5}
                separator=">"
                sx={{ mt: 0.5 }}
            >
                <Link
                    component="button"
                    onClick={() => {
                        onDelete && onDelete(param);
                    }}
                    underline="hover"
                    variant="body2"
                >
                    <Typography
                        color="text.secondary"
                        sx={{ display: 'inline-flex' }}
                    >
                        <Icon faKey="house" sx={{ mr: 0.5 }} />
                    </Typography>
                    {label}
                </Link>
                {crumbs.map((c, i) => (
                    <div key={c.id}>
                        {i + 1 === crumbs.length ? (
                            <Typography
                                sx={{ display: 'inline-flex' }}
                                color="text.secondary"
                            >
                                {c.iconKey && (
                                    <Icon faKey={c.iconKey} sx={{ mr: 0.5 }} />
                                )}
                                {c.label}
                            </Typography>
                        ) : (
                            <Link
                                component="button"
                                onClick={() => {
                                    onChange &&
                                        onChange({
                                            param: param,
                                            value: c.id
                                        });
                                }}
                                underline="hover"
                                variant="body2"
                            >
                                {c.iconKey && (
                                    <Typography
                                        color="text.secondary"
                                        sx={{ display: 'inline-flex' }}
                                    >
                                        <Icon
                                            faKey={c.iconKey}
                                            sx={{ mr: 0.5 }}
                                        />
                                    </Typography>
                                )}
                                {label}
                            </Link>
                        )}
                    </div>
                ))}
            </Breadcrumbs>
        </Stack>
    );
}

export default TreeFilter;
