import React from 'react';
import classes from './sass/App.module.scss'

import Nav from './Containers/Nav/Nav'
import Footer from './Containers/Footer/Footer'

import { Route, BrowserRouter } from 'react-router-dom'

import HomePage from './Containers/HomePage/HomePage'
import BuilderPage from './Containers/BuilderPage/BuilderPage'
import LoginPage from './Containers/LoginPage/LoginPage'

const routes = [
  { path: '', name: 'Home', Component: HomePage },
  { path: 'builder', name: 'Builder', Component: BuilderPage },
  { path: 'login', name: 'Login', Component: LoginPage },
]

function App() {
  return (

    <div className={classes.App}>
      <Nav />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={`/${path}`} component={Component} />
        ))}
      </BrowserRouter>
      <Footer />
    </div >

  )
}

export default App;
