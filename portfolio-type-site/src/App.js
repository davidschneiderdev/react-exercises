import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import ParagraphText from './ParagraphText';


const headerTitle = `Amazing Web Developer`;

const copy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto optio necessitatibus, ipsam earum dignissimos iusto sit alias debitis. Distinctio corrupti, mollitia dignissimos quisquam totam possimus voluptatum accusamus facere molestiae!`;

const linkNames = [
  'Home',
  'Portfolio',
  'Contact'
];


function App() {
  return (
    <div className="container-fluid">
      <Header 
        title={headerTitle}
      />
      <Nav 
        links={linkNames}
      />
      <ParagraphText 
        content={copy}
      />
      <Footer />
    </div>
  );
}

export default App;
