import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Alerts from './components/layouts/Alerts'
import Home from './components/pages/Home'
import Articles from './components/articles/Articles'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoutes'

import ArticleState from './context/article/ArticleState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect( () => {
    M.AutoInit()
  })

  return (
    <AuthState>
      <ArticleState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
                <div className="container">
                  <div className="row">
                    <Alerts />
                    <Switch>
                      <PrivateRoute exact path='/' component={Home} />
                      <Route exact path='/articles' component={Articles} />
                      <Route exact path='/register' component={Register} />
                      <Route exact path='/login' component={Login} />
                    </Switch>
                  </div>
                </div>
            </Fragment>
          </Router>
        </AlertState>
      </ArticleState>
    </AuthState>
  )
}

export default App;
