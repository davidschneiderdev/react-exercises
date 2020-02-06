import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Nav from './Nav';

import RouteOne from './RouteOne';
import RouteTwo from './RouteTwo';
import RouteThree from './RouteThree';
import RouteFour from './RouteFour';
import RouteFive from './RouteFive';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const linkNames = [
  {
    text: 'RouteOne',
    path: '/one'
  },
  {
    text: 'RouteTwo',
    path: '/two'
  },
  {
    text: 'RouteThree',
    path: '/three'
  },
  {
    text: 'RouteFour',
    path: '/four'
  },
  {
    text: 'RouteFive',
    path: '/five'
  }
]

function App() {
  return (
    <Router>
      <Nav 
        links={linkNames}
      />
      <Switch>
        <Route path="/one">
          <RouteOne />
        </Route>
        <Route path="/two">
          <RouteTwo />
        </Route>
        <Route path="/three">
          <RouteThree />
        </Route>
        <Route path="/four">
          <RouteFour />
        </Route>
        <Route path="/five">
          <RouteFive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
