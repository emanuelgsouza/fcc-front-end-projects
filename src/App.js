import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import Home from './pages/Home';
import Palindrome from './pages/Palindrome';

import Copyright from './components/Copyright'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
`;


function App() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>

          <Route path="/palindrome">
            <Palindrome />
          </Route>
        </Switch>

        <Copyright />
      </AppContainer>
    </Router>
  );
}

export default App;
