import React from 'react';
import { useHistory } from 'react-router';

import { NavbarButton, RightNav } from './styled';

import { GitHub } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const NotSigned = () => {
    const history = useHistory();

    return (
        <RightNav>
            <NavbarButton onClick={() => history.push('/sign-in')}>Login</NavbarButton>
            <IconButton color='inherit' onClick={() => window.open('https://www.github.com/Ibbus93/microfrontend-container/', '_blank')}>
                <GitHub color='inherit' />
            </IconButton>
        </RightNav>
    );
};

export default NotSigned;
