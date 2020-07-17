import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { SignInSkeleton } from './features/Landing/components';

import Landing from "./features/Landing";
import Account from './features/Account';

const SignIn = React.lazy(() => import("signIn/SignIn"));

const App = () => {
  const history = useHistory();

  const openAccount = (authorization) => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    if (!auth && authorization.id && authorization.token) {
      localStorage.setItem('auth', JSON.stringify(authorization));
      history.push("/account");
    }
  };

  return (
    <Switch>
      <Route path="/sign-in">
        <React.Suspense fallback={<SignInSkeleton />}>
          <SignIn handler={openAccount} history={history} />
        </React.Suspense>
      </Route>
      <Route path="/account">
        <Account history={history} />
      </Route>
      <Route path="/" component={Landing} exact />
    </Switch>
  );
};
export default App;
