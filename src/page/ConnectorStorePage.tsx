import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    GridActionsCellItem,
    GridRenderCellParams,
    GridRowId,
    GridRowParams
} from '@mui/x-data-grid';
import {
    ConnectorType,
    ConnectorTypeCmp,
    Icon,
    StatusIconButton,
    StatusType
} from '../viz';
import { GridColumn } from '../page/storepage/StorePageGrid';
import { FilterProps } from '../data/filters/common';
import StorePage from '../page/StorePage';

export type ConnectorStoreActionType =
    | 'create'
    | 'edit'
    | 'delete'
    | 'download'
    | 'redeploy';

export type ConnectorStoreInstanceType = 'loadmaster' | 'wuginstance';

export interface ConnectorStoreRow {
    id: GridRowId;
    name: string;
    type: ConnectorType;
    status: StatusType;
    siteName: string;
    connectedTo?: string;
    ipAddress: string;
}

export type ConnectorStorePageProps = {
    instanceType: ConnectorStoreInstanceType;
    countApi?: (args: object) => Promise<number>;
    rowsApi?: (args: object) => Promise<ConnectorStoreRow[]>;
    onActionClick?: (args: {
        actionType: ConnectorStoreActionType;
        connectorType?: ConnectorType;
        id?: GridRowId;
    }) => void;
};

function ConnectorStorePage({
    instanceType,
    countApi,
    rowsApi,
    onActionClick
}: ConnectorStorePageProps) {
    const { t } = useTranslation('nui');

    const columns: GridColumn[] = [
        {
            field: 'actions',
            type: 'actions',
            hideable: false,
            flex: 0.2,
            minWidth: 1,
            maxWidth: 1,
            getActions: (params: GridRowParams<ConnectorStoreRow>) => [
                <GridActionsCellItem
                    icon={<Icon faKey="edit" />}
                    label={t('command.edit')}
                    showInMenu
                    onClick={() =>
                        onActionClick &&
                        onActionClick({
                            actionType: 'edit',
                            connectorType: undefined,
                            id: params.id
                        })
                    }
                />,
                <GridActionsCellItem
                    icon={<Icon faKey="download" />}
                    label={t('command.download')}
                    showInMenu
                    onClick={() =>
                        onActionClick &&
                        onActionClick({
                            actionType: 'download',
                            connectorType: undefined,
                            id: params.id
                        })
                    }
                />,
                <GridActionsCellItem
                    icon={<Icon faKey="trash" />}
                    label={t('command.delete')}
                    showInMenu
                    onClick={() =>
                        onActionClick &&
                        onActionClick({
                            actionType: 'delete',
                            connectorType: undefined,
                            id: params.id
                        })
                    }
                />,
                <GridActionsCellItem
                    icon={<Icon faKey="refresh" />}
                    label={t('command.redeploy')}
                    showInMenu
                    onClick={() =>
                        onActionClick &&
                        onActionClick({
                            actionType: 'redeploy',
                            connectorType: undefined,
                            id: params.id
                        })
                    }
                />
            ]
        },
        {
            field: 'id',
            headerName: t('label.id'),
            headerAlign: 'center',
            align: 'right',
            flex: 0.2,
            hidden: true
        },
        {
            field: 'name',
            headerName: t('label.name'),
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 100
        },
        {
            field: 'type',
            headerName: t('label.type'),
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 100,
            renderCell: (
                params: GridRenderCellParams<ConnectorStoreRow, string>
            ) => {
                return (
                    <ConnectorTypeCmp
                        connectorType={params.value as ConnectorType}
                    />
                );
            }
        },
        {
            field: 'status',
            headerName: t('label.status'),
            headerAlign: 'left',
            flex: 1,
            maxWidth: 150,
            renderCell: (
                params: GridRenderCellParams<ConnectorStoreRow, string>
            ) => {
                return (
                    <StatusIconButton
                        statusType={params.value as StatusType}
                        incidentLink={'true'}
                    ></StatusIconButton>
                );
            }
        },
        {
            field: 'siteName',
            headerName: t('label.connectorStorePage.siteName'),
            flex: 0.5,
            minWidth: 50,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'connectedTo',
            headerName: t('label.connectorStorePage.connectedTo'),
            flex: 1,
            minWidth: 50,
            headerAlign: 'left',
            align: 'left',
            renderCell: (
                params: GridRenderCellParams<ConnectorStoreRow, string>
            ) => {
                return params.value ?? '-';
            }
        },
        {
            field: 'ipAddress',
            headerName: t('label.ipAddress'),
            flex: 1,
            minWidth: 50,
            headerAlign: 'left',
            align: 'left'
        }
    ];

    const tools = [
        {
            iconKey: 'plus',
            label: t('command.add'),
            requiresRow: false,
            children: [
                {
                    iconKey: 'plug',
                    label: t('label.connectorType.connector'),
                    requiresRow: false,
                    onClick: () =>
                        onActionClick &&
                        onActionClick({
                            actionType: 'create',
                            connectorType: 'connector',
                            id: undefined
                        })
                },
                {
                    iconKey: 'gears',
                    label: t(`label.connectorType.${instanceType}`),
                    requiresRow: false,
                    onClick: () =>
                        onActionClick &&
                        onActionClick({
                            actionType: 'create',
                            connectorType: instanceType,
                            id: undefined
                        })
                }
            ]
        },
        {
            iconKey: 'edit',
            label: t('command.edit'),
            requiresRow: true,
            onClick: (e: GridRowId[] | undefined) => {
                onActionClick &&
                    e !== undefined &&
                    onActionClick({
                        actionType: 'edit',
                        connectorType: undefined,
                        id: e[0]
                    });
            }
        },
        {
            iconKey: 'download',
            label: t('command.download'),
            requiresRow: true,
            onClick: (e: GridRowId[] | undefined) => {
                onActionClick &&
                    e !== undefined &&
                    onActionClick({
                        actionType: 'download',
                        connectorType: undefined,
                        id: e[0]
                    });
            }
        },
        {
            iconKey: 'trash',
            label: t('command.delete'),
            requiresRow: true,
            onClick: (e: GridRowId[] | undefined) => {
                onActionClick &&
                    e !== undefined &&
                    onActionClick({
                        actionType: 'delete',
                        connectorType: undefined,
                        id: e[0]
                    });
            }
        },
        {
            iconKey: 'refresh',
            label: t('command.redeploy'),
            requiresRow: true,
            onClick: (e: GridRowId[] | undefined) => {
                onActionClick &&
                    e !== undefined &&
                    onActionClick({
                        actionType: 'redeploy',
                        connectorType: undefined,
                        id: e[0]
                    });
            }
        }
    ];

    const filters: FilterProps = [
        {
            type: 'tree',
            label: t('label.filter.allSites'),
            nodes: [],
            param: 'site'
        },
        {
            type: 'toggle',
            param: 'status',
            toggles: [
                {
                    iconColor: 'success',
                    iconKey: 'circle',
                    id: 1,
                    label: t('label.statusType.healthy')
                },
                {
                    iconColor: 'warning',
                    iconKey: 'circle',
                    id: 2,
                    label: t('label.statusType.warning')
                },
                {
                    iconColor: 'error',
                    iconKey: 'circle',
                    id: 3,
                    label: t('label.statusType.critical')
                }
            ]
        },
        {
            type: 'list',
            param: 'type',
            label: 'Type',
            list: [
                {
                    id: 1,
                    label: t('label.connectorType.connector')
                },
                {
                    id: 2,
                    label: t(`label.connectorType.${instanceType}`)
                }
            ]
        },
        {
            type: 'search',
            param: 'search'
        }
    ];

    return (
        <StorePage
            tools={tools}
            columns={columns}
            filters={filters}
            countApi={countApi}
            rowsApi={rowsApi}
            title={t('title.connectorStorePage.pageTitle')}
        />
    );
}

export default ConnectorStorePage;
