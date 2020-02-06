import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router';
import Cookies from 'js-cookie';

import { Typography, IconButton } from '@material-ui/core';
import { GitHub, MeetingRoom, AccountBalance } from '@material-ui/icons';

import { RightNav } from './styled';

const Signed = ({ username }) => {
    const history = useHistory();

    const logout = () => {
        Cookies.remove('id');
        Cookies.remove('token');
        history.push('/');
        window.location.reload();
    };

    return (
        <RightNav>
            <Typography variant="button">Welcome, { username }</Typography>
            <IconButton color='inherit' onClick={() => history.push('/account')}>
                <AccountBalance color='inherit' />
            </IconButton>
            <IconButton color='inherit' onClick={() => logout()}>
                <MeetingRoom color='inherit' />
            </IconButton>
            <IconButton color='inherit' onClick={() => window.open('https://www.github.com/Ibbus93/microfrontend-container/', '_blank')} >
                <GitHub color='inherit' />
            </IconButton>
        </RightNav>
    );
};

Signed.propTypes = {
    username: PropTypes.string
};

Signed.defaultProps = {
    username: ''
};

export default Signed;
