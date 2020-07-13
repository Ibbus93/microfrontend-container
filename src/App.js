import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

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
      <React.Suspense fallback={null}>
        <Route path="/sign-in">
          <SignIn handler={openAccount} history={history} />
        </Route>
        <Route path="/account">
          <Account auth={auth} history={history} />
        </Route>
        <Route path="/" component={Landing} exact />
      </React.Suspense>
    </Switch>
  );
};
export default App;
