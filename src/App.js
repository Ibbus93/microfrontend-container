import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';

import Cookies from "js-cookie";
import { connect } from "react-redux";

import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { Account, Landing, SignIn } from './features';

import { requestUser } from "./store/user/actions";
import { Selector } from "./store/user/reducer";

const CenteredContent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const App = ({
    user: {
        isLoading,
        data
    },
    getUser
}) => {
    const [ isDone, setIsDone ] = useState(false);

    const id = Cookies.get('id');
    const token = Cookies.get('id');

    useEffect(() => {
        if ((!id && !token) || data) {
            setIsDone(true);
        } else {
            getUser({ id, token });
        }
    }, [data]);

    return isLoading || !isDone
        ? (
            <CenteredContent>
                <CircularProgress />
            </CenteredContent>
        )
        : (
            <Switch>
                <Route path='/sign-in' component={SignIn} />
                <Route path='/account' component={Account} />
                <Route exact path='/' component={Landing} />
            </Switch>
        );
};

App.propTypes = {
    user: PropTypes.shape({
        isLoading: PropTypes.bool,
        data: PropTypes.any
    }),
    getUser: PropTypes.func
};

App.defaultProps = {
    user: {
        isLoading: false,
        data: null
    },
    getUser: () => {}
};

const mapStateToProps = state => ({
    user: Selector.getUser(state)
});

const dispatchToProps = {
    getUser: requestUser
};

export default connect(mapStateToProps, dispatchToProps)(App);
