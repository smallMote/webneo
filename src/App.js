import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'font-awesome/less/font-awesome.less'
import 'react-fontawesome'
import './App.css'
import './common/stylus/base.styl'
import NavBar from './components/navbar/navbar'
import Home from './views/home/home'

function App () {
  return (
    <div className="App">
      <div className="app-left">
        <NavBar/>
      </div>
      <div className="app-right">
        Right
        <Router>
          <Switch>
            <Route path='/home' component={ Home }/>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
