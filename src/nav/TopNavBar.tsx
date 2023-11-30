import { AppBar, Button, IconButton, Link, Menu, MenuItem, MenuList, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "../viz";
import UserPreferenceEditor from "../editors/UserPreferenceEditor";

export interface NavLinkProps {
    name: string,
    path: string
}

export interface NavProps {
    name: string,
    path?: string,
    children?: NavLinkProps[]
}

export interface TopNavBarProps {
    appName: string,
    navs: NavProps[]
    userDisplayName?: string,
    username?: string
};

interface LogoProps {
    appName: string
};

function Logo({ appName }: LogoProps) {
    const nav = useNavigate();

    return (
        <Link
            color="inherit"
            href="/"
            onClick={(e) => {
                e.preventDefault();
                nav("/");
            }}
            underline="none"
        >
            <Stack
                direction="row"
                spacing={1}
            >
                <svg
                    height="36px"
                    viewBox="0 0 49 60.3"
                    width="36px"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#5ce500"
                        d="M11.2 14.9L0 21.3l17.4 10.1v20.1l11.2-6.4c.5-.3.9-1 .9-1.6V24.4L13 14.9c-.5-.3-1.3-.3-1.8 0z"
                    >
                    </path>
                    <path
                        fill="#5ce500"
                        d="M12.1 48.4V34.5L0 41.5zM25 .2c-.5-.3-1.3-.3-1.8 0L10.7 7.4l24.1 13.9v27.9L47.3 42c.5-.3.9-1 .9-1.6V13.6L25 .2z">
                    </path>
                </svg>
                <Typography
                    color="text.secondary"
                    sx={{ pt: 1 }}
                >
                    {appName}
                </Typography>
            </Stack>
        </Link>
    )
}

function TopNavBar({ appName, navs, userDisplayName, username }: TopNavBarProps) {
    const
        loc = useLocation(),
        nav = useNavigate(),
        [activeNav, setActiveNav] = React.useState<string | null>(null),
        [anchors, setAnchors] = React.useState<{ [name: string]: HTMLElement | null }>({}),
        handleClickPrefs = (e: React.MouseEvent<HTMLButtonElement>) => {
            setAnchors({ ...anchors, ...{ prefs: e.currentTarget } });
        };

    React.useEffect(() => {
        const isActive = (nav: NavProps) => (
            nav.children && nav.children.find(c => (
                loc.pathname.startsWith(c.path)
            ))
        );

        navs.every(n => {
            if ((n.path && loc.pathname.startsWith(n.path)) || isActive(n)) {
                setActiveNav(n.name);
                return false;
            }

            return true;
        });
    }, [navs, loc, setActiveNav]);

    return (
        <AppBar
            color="default"
            position="sticky"
        >
            <Stack
                direction="row"
                spacing={5}
                sx={{
                    display: {
                        xs: "none",
                        md: "flex"
                    },
                    padding: 2
                }}
            >
                <Logo
                    appName={appName}
                />
                {
                    navs.map(n => (
                        <div
                            key={n.name}
                        >
                            <Button
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    if (n.path) {
                                        nav(n.path);
                                    }
                                    else {
                                        setAnchors({ ...anchors, ...{ [n.name]: e.currentTarget } });
                                    }
                                }}
                            >
                                <Typography
                                    color={n.name === activeNav ? "text.primary" : "text.secondary"}
                                    variant="body1"
                                >
                                    {n.name}
                                </Typography>
                                {
                                    n.children &&
                                    <Typography
                                        color={n.name === activeNav ? "text.primary" : "text.secondary"}
                                        variant="body1"
                                    >
                                        <Icon
                                            iconKey="menuDown"
                                            sx={{ paddingLeft: "4px", paddingTop: "4px" }}
                                        />
                                    </Typography>
                                }
                            </Button>
                            {
                                n.children &&
                                <Menu
                                    anchorEl={anchors[n.name]}
                                    open={!!anchors[n.name]}
                                    onClose={() => {
                                        setAnchors({ ...anchors, ...{ [n.name]: null } });
                                    }}
                                >
                                    {
                                        n.children.map(c => (
                                            <MenuItem
                                                key={c.name}
                                                onClick={() => {
                                                    setAnchors({ ...anchors, ...{ [n.name]: null } });
                                                    nav(c.path);
                                                }}
                                            >
                                                {c.name}
                                            </MenuItem>
                                        ))
                                    }
                                </Menu>
                            }
                        </div>
                    ))
                }
                <div
                    style={{ flex: "auto" }}
                />
                <IconButton
                    onClick={handleClickPrefs}
                >
                    <Icon
                        iconKey="settings"
                    />
                </IconButton>
            </Stack>

            <Stack
                direction="row"
                spacing={1}
                sx={{
                    display: {
                        xs: "flex",
                        md: "none"
                    },
                    padding: 1
                }}
            >
                <Logo
                    appName={appName}
                />
                <IconButton
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        setAnchors({ ...anchors, ...{ mobile: e.currentTarget } });
                    }}
                >
                    <Icon
                        iconKey="hamburgerMenu"
                    />
                </IconButton>
                <Menu
                    anchorEl={anchors.mobile}
                    open={!!anchors.mobile}
                    onClose={() => {
                        setAnchors({ ...anchors, ...{ mobile: null } });
                    }}
                >
                    {
                        navs.map(n => (
                            <MenuItem
                                key={`mobile${n.name}`}
                                onClick={() => {
                                    if (n.path) {
                                        setAnchors({ ...anchors, ...{ mobile: null } });
                                        nav(n.path);
                                    }
                                }}
                            >
                                <Stack>
                                    {n.name}
                                    {
                                        n.children &&
                                        <MenuList>
                                            {
                                                n.children.map(c => (
                                                    <MenuItem
                                                        key={`mobile${c.name}`}
                                                        onClick={() => {
                                                            setAnchors({ ...anchors, ...{ mobile: null } });
                                                            nav(c.path);
                                                        }}
                                                    >
                                                        {c.name}
                                                    </MenuItem>
                                                ))
                                            }
                                        </MenuList>
                                    }
                                </Stack>
                            </MenuItem>
                        ))
                    }
                </Menu>
                <div
                    style={{ flex: "auto" }}
                />
                <IconButton
                    onClick={handleClickPrefs}
                >
                    <Icon
                        iconKey="settings"
                    />
                </IconButton>
            </Stack>

            <UserPreferenceEditor
                anchorEl={anchors.prefs}
                open={!!anchors.prefs}
                userDisplayName={userDisplayName}
                username={username}
                onClose={() => {
                    setAnchors({ ...anchors, ...{ prefs: null } });
                }}
            />
        </AppBar>
    )
}

export default TopNavBar;