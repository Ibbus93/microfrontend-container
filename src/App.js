import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Landing } from './features';
import { Header, MicroFrontend } from "./features/shared";
import styled from "styled-components";

const AppContainer = styled.div``;

const HOST = 'https://ibbus93.github.io/';
const SIGN_IN_PATH = 'micro-login';

const SignIn = ({ history }) => <MicroFrontend history={history} name="SignIn" host={HOST} path={SIGN_IN_PATH} />;

const App = () => (
    <AppContainer>
        <Header/>
        <Switch>
            <Route path='/sign-in' component={SignIn} />
            <Route path='/' component={Landing}/>
        </Switch>
    </AppContainer>
);

export default App;
