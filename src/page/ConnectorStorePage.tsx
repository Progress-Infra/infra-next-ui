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
    ConnectorTypeIconButton,
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
    rows?: ConnectorStoreRow[];
    rowsApi?: (args: object) => Promise<ConnectorStoreRow[]>;
    onActionClick?: (args: {
        actionType: ConnectorStoreActionType;
        connectorType?: ConnectorType;
        id?: GridRowId;
    }) => void;
};

function ConnectorStorePage({
    instanceType,
    rows,
    rowsApi,
    onActionClick
}: ConnectorStorePageProps) {
    const { t } = useTranslation('nui');

    const columns: GridColumn[] = [
        {
            field: 'actions',
            type: 'actions',
            hideable: false,
            width: 1,
            minWidth: 1,
            maxWidth: 1,
            getActions: (params: GridRowParams<ConnectorStoreRow>) => [
                <GridActionsCellItem
                    icon={<Icon faKey="edit" />}
                    label="Edit"
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
                    label="Download"
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
                    label="Delete"
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
                    label="Redeploy"
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
            headerName: 'Id',
            headerAlign: 'center',
            align: 'right',
            flex: 1,
            minWidth: 50,
            hidden: true
        },
        {
            field: 'name',
            headerName: 'Name',
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 100
        },
        {
            field: 'type',
            headerName: 'Type',
            headerAlign: 'left',
            align: 'left',
            flex: 1,
            minWidth: 100,
            renderCell: (
                params: GridRenderCellParams<ConnectorStoreRow, string>
            ) => {
                return (
                    <ConnectorTypeIconButton
                        connectorType={params.value as ConnectorType}
                    ></ConnectorTypeIconButton>
                );
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            headerAlign: 'left',
            width: 150,
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
            headerName: 'Site name',
            flex: 0.5,
            minWidth: 50,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'connectedTo',
            headerName: 'Connected to',
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
            headerName: 'IP address',
            flex: 1,
            minWidth: 50,
            headerAlign: 'right',
            align: 'right'
        },
        {
            field: 'spacer',
            headerName: '',
            width: 1,
            headerAlign: 'right',
            align: 'right'
        }
    ];

    const tools = [
        {
            iconKey: 'plus',
            label: t('label.connectorStorePage.tools.add'),
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
            label: t('label.connectorStorePage.tools.edit'),
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
            label: t('label.connectorStorePage.tools.download'),
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
            label: t('label.connectorStorePage.tools.delete'),
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
            label: t('label.connectorStorePage.tools.redeploy'),
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
            label: t('label.connectorStorePage.filters.allSites'),
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
                    label: t('label.status.healthy')
                },
                {
                    iconColor: 'warning',
                    iconKey: 'circle',
                    id: 2,
                    label: t('label.status.warning')
                },
                {
                    iconColor: 'error',
                    iconKey: 'circle',
                    id: 3,
                    label: t('label.status.critical')
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
            sx={{ width: '100%' }}
            tools={tools}
            columns={columns}
            countApi={undefined}
            filters={filters}
            rowsApi={rowsApi}
            rows={rows}
            title={t('label.connectorStorePage.title')}
        />
    );
}

export default ConnectorStorePage;
