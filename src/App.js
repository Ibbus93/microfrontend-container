import React from 'react';
import { Route, Switch } from 'react-router';

import { Account, Landing, SignIn } from './features';

const App = () => (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/account' component={Account} />
    </Switch>
);

export default App;
