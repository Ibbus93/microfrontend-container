import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';


import { RightNav } from '../../../../features/landing/components';

const Signed = ({ user }) => (
    <RightNav>
        <Typography variant="button">
            Welcome, { user.name }
        </Typography>
        <IconButton color='inherit' onClick={() => window.open('https://www.github.com/Ibbus93/microfrontend-container/', '_blank')} >
            <GitHub color='inherit' />
        </IconButton>
    </RightNav>
);

export default Signed;
