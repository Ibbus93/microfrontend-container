import React from 'react';
import { Route, Switch } from 'react-router';

import { Landing, Header, SignIn } from './features';

const Welcome = () => <h2>Welcome stranger</h2>;

const App = () => (
    <div id="app-container">
        <Header />
        <Switch>
            <Route path='/sign-in' component={SignIn} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/' component={Landing} />
        </Switch>
    </div>
);

export default App;
