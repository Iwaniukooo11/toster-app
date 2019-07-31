import React from 'react';
import classes from './sass/App.module.scss'
import HomePage from './Containers/HomePage/HomePage'
import Nav from './Containers/Nav/Nav'

function App() {
  return (
    <div className={classes.App}>
      {/* <h1>Test</h1> */}
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
