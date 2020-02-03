import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { RightNav } from "../../landing/components";

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h6">
                <Button><Link to="/">Pine Canyon Bank</Link></Button>
            </Typography>
            <RightNav>
                <Button><Link to="/sign-in">Login</Link></Button>
            </RightNav>
        </Toolbar>
    </AppBar>
);

export default Header;
