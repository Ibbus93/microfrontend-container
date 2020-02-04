import React from 'react';
import { useHistory } from 'react-router';

import { NavbarButton } from '../../shared/styled';
import { RightNav } from '../../landing/components';
import { GitHub } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const NotSigned = () => {
    const history = useHistory();

    return (
        <RightNav>
            <NavbarButton onClick={() => history.push('/sign-in')}>Login</NavbarButton>
            <IconButton color='inherit' onClick={() => window.location.replace('https://www.github.com/Ibbus93/microfrontend-container/')}>
                <GitHub color='inherit' />
            </IconButton>
        </RightNav>
    );
};

export default NotSigned;
