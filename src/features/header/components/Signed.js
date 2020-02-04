import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';


import { RightNav } from '../../landing/components';

const Signed = ({ user }) => (
    <RightNav>
        <Typography variant="button">
            Welcome, { user.name }
        </Typography>
        <IconButton color='inherit'>
            <GitHub color='inherit' />
        </IconButton>
    </RightNav>
);

export default Signed;
