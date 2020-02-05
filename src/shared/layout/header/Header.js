import React from 'react';
import { useHistory } from 'react-router';

import { Toolbar, Typography } from '@material-ui/core';
import { LogoButton, StyledHeader } from '../../styled';

import { connect } from 'react-redux';
import { Selector } from '../../../store/user/reducer';
import { NotSigned, Signed } from './components';

const Header = ({ user }) => {
    const history = useHistory();

    return (
        <StyledHeader position="sticky">
            <Toolbar>
                <Typography variant="h6">
                    <LogoButton variant={'contained'} onClick={() => history.push('/')}>Pine Canyon Bank</LogoButton>
                </Typography>

                { !!user ? <Signed user={user} /> : <NotSigned /> }
            </Toolbar>
        </StyledHeader>
    );
};

const mapStateToProps = state => ({
    user: Selector.getUser(state).data
});

export default connect(mapStateToProps)(Header);
