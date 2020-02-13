import React from 'react';
// import logo from './logo.svg';
import './App.css';


import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import ParagraphText from './ParagraphText';
import Blog from './Blog';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const headerTitle = `Amazing Web Developer`;

const copy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto optio necessitatibus, ipsam earum dignissimos iusto sit alias debitis. Distinctio corrupti, mollitia dignissimos quisquam totam possimus voluptatum accusamus facere molestiae!`;

const linkNames = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Blog',
    path: '/blog'
  }
];


function App() {
  return (
    <Router>
      <Header title={headerTitle} />
      <Nav 
        links={linkNames}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog/:blogId">
          <Blog />
        </Route>
      </Switch>
      <Footer ></Footer>
    </Router>

  );
}

function Home() {
  return <h1>You are Home</h1>
}

// function Blog() {
//   return <h1>You're on the blog!</h1>
// }

export default App;
