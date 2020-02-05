import React from 'react';
import { useHistory } from 'react-router';

import { Typography, IconButton } from '@material-ui/core';
import { GitHub, AccountBalance } from '@material-ui/icons';

import { RightNav } from './styled';

const Signed = ({ user }) => {
    const history = useHistory();

    return (
        <RightNav>
            <Typography variant="button">
                Welcome, { user.name }
            </Typography>
            <IconButton color='inherit' onClick={() => history.push('/account')}>
                <AccountBalance color='inherit' />
            </IconButton>
            <IconButton color='inherit' onClick={() => window.open('https://www.github.com/Ibbus93/microfrontend-container/', '_blank')} >
                <GitHub color='inherit' />
            </IconButton>
        </RightNav>
    );
};

export default Signed;
