import React from 'react';
import { Route, Switch } from 'react-router';

import { Landing } from './features';
import { Header, MicroFrontend } from './features/shared';

const HOST = 'https://ibbus93.github.io/';
const SIGN_IN_PATH = 'micro-login';

const SignIn = ({ history }) => <MicroFrontend history={history} name="SignIn" host={HOST} path={SIGN_IN_PATH} />;

const App = () => (
    <div id="app-container">
        <Header />
            <Switch>
                <Route path='/sign-in' component={SignIn} />
                <Route path='/' component={Landing} />
            </Switch>
    </div>
);

export default App;
