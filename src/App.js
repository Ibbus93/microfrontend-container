import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';

import Cookies from "js-cookie";
import { connect } from "react-redux";

import { CircularProgress } from "@material-ui/core";
import { Account, Landing, SignIn } from './features';

import { requestUser } from "./store/user/actions";
import { Selector } from "./store/user/reducer";

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
        ? <CircularProgress />
        : (
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/account' component={Account} />
            </Switch>
        );
};

const mapStateToProps = state => ({
    user: Selector.getUser(state)
});

const dispatchToProps = {
    getUser: requestUser
};

export default connect(mapStateToProps, dispatchToProps)(App);
