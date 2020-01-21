import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Palindrome from './pages/Palindrome';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>

          <Route path="/palindrome">
            <Palindrome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
