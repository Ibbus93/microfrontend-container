import React from 'react';
import { Route, Switch } from "react-router-dom";

import styled from "styled-components";

import { Landing } from './features';
import { Header } from "./features/shared";

const AppContainer = styled.div`
    
`;

const App = () => (
    <AppContainer>
        <Header/>
        <Switch>
            <Route path='/' component={Landing}/>
        </Switch>
    </AppContainer>
);

export default App;
