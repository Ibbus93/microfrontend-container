import React from 'react';
import { Layout, MicroFrontend } from '../../shared';
import Authentication from '../../shared/authentication';

const HOST = process.env.REACT_APP_HOST;
const SIGN_IN_PATH = process.env.REACT_APP_ACCOUNT_PATH;

const Account = ({ history }) => (
    <Layout>
        <MicroFrontend
            history={history}
            name="BankAccount"
            host={HOST}
            path={SIGN_IN_PATH}
        />
    </Layout>
);

export default Authentication(Account);
