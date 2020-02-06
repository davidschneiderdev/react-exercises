import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Page from './Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/page/:pageId">
          <Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
