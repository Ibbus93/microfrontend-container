import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import { connect } from 'react-redux';
import { Selector } from '../../../store/user/reducer';

import { Toolbar, Typography } from '@material-ui/core';

import { NotSigned, Signed } from './components';
import { LogoButton, StyledHeader } from './components/styled';


const Header = ({ user }) => {
    const history = useHistory();

    return (
        <StyledHeader position="sticky">
            <Toolbar>
                <Typography variant="h6">
                    <LogoButton variant={'contained'} onClick={() => history.push('/')}>Pine Canyon Bank</LogoButton>
                </Typography>

                { !!user ? <Signed username={user.name} /> : <NotSigned /> }
            </Toolbar>
        </StyledHeader>
    );
};

Header.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string,
        email: PropTypes.string,
    })
};

Header.defaultProps = {
    user: null
};

const mapStateToProps = state => ({
    user: Selector.getUser(state).data
});

export default connect(mapStateToProps)(Header);
