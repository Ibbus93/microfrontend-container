import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestUser } from '../../store/user/actions';
import { Selector } from '../../store/user/reducer';
import { MicroFrontend } from '../shared';

const HOST = 'https://ibbus93.github.io/';
const SIGN_IN_PATH = 'micro-login';

const SignIn = ({ history, user, getUser}) => {
    useEffect(() => {
        if (user.data) {
            history.push('/welcome');
        }
    }, [user]);

    const handleLogin = ({ id, logged }) => {
        if (id && logged) {
            getUser({ id });
        }
    };

    const MicroSignIn = ({ history }) =>
        <MicroFrontend history={history} name="SignIn"
                       handler={handleLogin}
                       host={HOST} path={SIGN_IN_PATH} />;

    return MicroSignIn({history});
};

const mapStateToProps = state => ({
    user: Selector.getUser(state)
});

const dispatchProps = {
    getUser: requestUser
};

export default connect(mapStateToProps, dispatchProps)(SignIn);
