import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

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

const theme = {
  primaryColor: '#3A3335',
  secondaryColor: '#FDF0D5',
  danger: '#F0544F'
}


function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
