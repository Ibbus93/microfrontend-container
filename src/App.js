import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { SignInSkeleton } from './features/landing/components';

import Landing from "./features/landing";

const Account = React.lazy(() => import("bankAccount/BankAccount"));
const SignIn = React.lazy(() => import("signIn/SignIn"));

const App = () => {
  const [auth, setAuth] = useState(null);
  const history = useHistory();

  const openAccount = (authorization) => {
    console.log(authorization);
    if (authorization.id && authorization.token) {
      setAuth(authorization);
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
        <Account auth={auth} history={history} />
      </Route>
      <Route path="/" component={Landing} exact />
    </Switch>
  );
};
export default App;
