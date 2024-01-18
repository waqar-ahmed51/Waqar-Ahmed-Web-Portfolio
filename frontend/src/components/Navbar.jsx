import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * Renders a navigation bar with a menu icon, title, and two toggle buttons.
 * @returns {JSX.Element} The rendered navigation bar.
 */
function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/* Add your menu icon here */}
                </IconButton>
                <Typography variant="h6" component="div">
                    Title
                </Typography>
                <Button color="inherit">Toggle 1</Button>
                <Button color="inherit">Toggle 2</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
