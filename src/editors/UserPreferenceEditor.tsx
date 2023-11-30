import { Avatar, Box, Button, ButtonGroup, Card, CardContent, CardHeader, IconButton, MenuItem, Popover, PopoverProps, Stack, TextField, useTheme } from "@mui/material";
import { Close, DarkMode, LightMode, Logout } from "@mui/icons-material";
import * as React from "react";
import { ThemeModeContext } from "../viz/ThemeProvider";
import { languages } from "../viz/i18n";
import { useTranslation } from "react-i18next";

export interface UserPreferenceEditorProps extends PopoverProps {
    userDisplayName?: string,
    username?: string
}

function UserPreferenceEditor({ onClose, userDisplayName, username, ...others }: UserPreferenceEditorProps) {
    const theme = useTheme(),
        themeMode = React.useContext(ThemeModeContext),
        { t, i18n } = useTranslation("nui");

    return (
        <Popover
            {...others}
            onClose={onClose}
        >
            <Card>
                <CardHeader
                    action={
                        <IconButton
                            onClick={() => {
                                onClose && onClose({}, "escapeKeyDown");
                            }}>
                            <Close />
                        </IconButton>
                    }
                    avatar={
                        <Avatar
                            sx={{ height: 64, width: 64 }}
                        />
                    }
                    title={userDisplayName}
                    subheader={username}
                />
                <CardContent>
                    <Stack
                        spacing={4}
                    >
                        <Box
                            sx={{ textAlign: "center", width: 1 }}
                        >
                            <ButtonGroup
                                variant="outlined"
                            >
                                <Button
                                    onClick={() => {
                                        themeMode.setThemeMode("light");
                                    }}
                                    startIcon={<LightMode />}
                                    variant={theme.palette.mode === "light" ? "contained" : "outlined"}
                                >
                                    {t("command.theme.lightMode")}
                                </Button>
                                <Button
                                    onClick={() => {
                                        themeMode.setThemeMode("dark");
                                    }}
                                    startIcon={<DarkMode />}
                                    variant={theme.palette.mode === "dark" ? "contained" : "outlined"}
                                >
                                    {t("command.theme.darkMode")}
                                </Button>
                            </ButtonGroup>
                        </Box>
                        <TextField
                            fullWidth
                            label={t("label.language")}
                            onChange={e => {
                                i18n.changeLanguage(e.target.value);
                            }}
                            select
                            value={i18n.language || "en"}
                        >
                            {
                                languages.map(l => (
                                    <MenuItem
                                        key={l.code}
                                        value={l.code}
                                    >
                                        {l.name}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <Button
                            href="/logout"
                            startIcon={<Logout />}
                        >
                            {t("command.signOut")}
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Popover>
    )
}

export default UserPreferenceEditor;