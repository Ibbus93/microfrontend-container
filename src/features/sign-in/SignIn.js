import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';

import { requestUser } from '../../store/user/actions';
import { Selector } from '../../store/user/reducer';

import { Layout, MicroFrontend } from '../../shared';

const HOST = process.env.REACT_APP_HOST;
const SIGN_IN_PATH = process.env.REACT_APP_SIGN_IN_PATH;

const SignIn = ({ history, user, getUser }) => {
    useEffect(() => {
        if (user.data) {
            history.push('/account');
        }
    }, [user]);

    const handleLogin = ({ id, token }) => {
        if (id && token) {
            getUser({ id });
            Cookie.set('id', id);
            Cookie.set('token', token);
        }
    };

    return (
        <Layout>
            <MicroFrontend
                history={history}
                name="SignIn"
                handler={handleLogin}
                host={HOST}
                path={SIGN_IN_PATH}
            />
        </Layout>
    );
};

const mapStateToProps = state => ({
    user: Selector.getUser(state),
});

const dispatchProps = {
    getUser: requestUser,
};

export default connect(mapStateToProps, dispatchProps)(SignIn);
