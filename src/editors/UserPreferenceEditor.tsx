import {
    Avatar,
    Box,
    ButtonGroup,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    MenuItem,
    Popover,
    PopoverProps,
    Stack,
    TextField,
    useTheme
} from '@mui/material';
import * as React from 'react';
import { ThemeModeContext } from '../viz/ThemeProvider';
import { languages } from '../viz/i18n';
import { useTranslation } from 'react-i18next';
import { Icon } from '../viz';
import { Button } from '../commands';

export interface UserPreferenceEditorProps extends PopoverProps {
    userDisplayName?: string;
    username?: string;
}

function UserPreferenceEditor({
    onClose,
    userDisplayName,
    username,
    ...others
}: UserPreferenceEditorProps) {
    const theme = useTheme(),
        themeMode = React.useContext(ThemeModeContext),
        { t, i18n } = useTranslation('nui');

    return (
        <Popover {...others} onClose={onClose}>
            <Card>
                <CardHeader
                    action={
                        <IconButton
                            onClick={() => {
                                onClose && onClose({}, 'escapeKeyDown');
                            }}
                        >
                            <Icon faKey="x" />
                        </IconButton>
                    }
                    avatar={<Avatar sx={{ height: 64, width: 64 }} />}
                    title={userDisplayName}
                    subheader={username}
                />
                <CardContent>
                    <Stack spacing={4}>
                        <Box sx={{ textAlign: 'center', width: 1 }}>
                            <ButtonGroup variant="outlined">
                                <Button
                                    onClick={() => {
                                        themeMode.setThemeMode('light');
                                    }}
                                    startIcon={<Icon faKey="sun" />}
                                    variant={
                                        theme.palette.mode === 'light'
                                            ? 'primary'
                                            : 'outline'
                                    }
                                >
                                    {t('command.theme.lightMode')}
                                </Button>
                                <Button
                                    onClick={() => {
                                        themeMode.setThemeMode('dark');
                                    }}
                                    startIcon={<Icon faKey="moon" />}
                                    variant={
                                        theme.palette.mode === 'dark'
                                            ? 'primary'
                                            : 'outline'
                                    }
                                >
                                    {t('command.theme.darkMode')}
                                </Button>
                            </ButtonGroup>
                        </Box>
                        <TextField
                            fullWidth
                            label={t('label.language')}
                            onChange={(e) => {
                                i18n.changeLanguage(e.target.value);
                            }}
                            select
                            value={i18n.language || 'en'}
                        >
                            {languages.map((l) => (
                                <MenuItem key={l.code} value={l.code}>
                                    {l.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            href="/logout"
                            startIcon={<Icon faKey="right-from-bracket" />}
                        >
                            {t('command.signOut')}
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Popover>
    );
}

export default UserPreferenceEditor;
