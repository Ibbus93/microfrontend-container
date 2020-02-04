import React from 'react';
import { Route, Switch } from 'react-router';

import { Landing, SignIn } from './features';
import { Layout } from './features/shared';

const Welcome = () => <Layout><h2>Welcome stranger</h2></Layout>;

const App = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/welcome' component={Welcome} />
    </Switch>
);

export default App;
