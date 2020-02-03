import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { RightNav } from "../../landing/components";

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
                News
            </Typography>
            <RightNav>
                <Button color="inherit">Login</Button>
            </RightNav>
        </Toolbar>
    </AppBar>
);

export default Header;
