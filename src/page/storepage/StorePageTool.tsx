import * as React from "react";
import { ToolsProps } from "./StorePageToolbar";
import { useRecoilValue } from "recoil";
import { GridSelection } from "./StorePageState";
import Button from "../../commands/Button";
import Icon from "../../viz/Icon";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";

export interface StorePageToolProps extends ToolsProps {
    isPrimary?: boolean
}

function StorePageTool({ children, disabled, iconKey, isPrimary, label, requiresRow, onClick }: StorePageToolProps) {
    const
        [anchor, setAnchor] = React.useState<HTMLElement | null>(null),
        gridSelection = useRecoilValue(GridSelection);

    return (
        <>
            <Button
                disabled={disabled || (requiresRow && !gridSelection)}
                endIcon={children ? (anchor ? <Icon faKey="angle-up" /> : <Icon faKey="angle-down" />) : undefined}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    setAnchor(e.currentTarget);
                    onClick && onClick();
                }}
                startIcon={iconKey ? <Icon faKey={iconKey} /> : undefined}
                variant={isPrimary ? "primary" : "ghost"}
            >
                {label}
            </Button>
            {
                children &&
                <Menu
                    anchorEl={anchor}
                    open={!!anchor}
                >
                    {
                        children.map((c, i) => (
                            <MenuItem
                                disabled={disabled || (c.requiresRow && !!gridSelection)}
                                key={`menuItem${i}`}
                                onClick={() => {
                                    setAnchor(null);
                                    c.onClick && c.onClick();
                                }}
                            >
                                {
                                    c.iconKey &&
                                    <ListItemIcon>
                                        <Icon
                                            faKey={c.iconKey}
                                        />
                                    </ListItemIcon>
                                }
                                <ListItemText>{c.label}</ListItemText>
                            </MenuItem>
                        ))
                    }
                </Menu>
            }
        </>
    )
}

export default StorePageTool;