import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/navbar/navbar'
import routes from './routes'
import 'font-awesome/less/font-awesome.less'
import 'react-fontawesome'
import '../App.css'

function AppRouter() {
  return (
    <div className="App">
      <Router>
        <div className="app-left">
          <NavBar routes={ routes }/>
        </div>
        <div className="app-right">
          {
            routes.map(item => {
              return <Route
                key={ item.name }
                exact={ item.exact }
                path={ item.path }
                component={ item.component } />
            })
          }
        </div>
      </Router>
    </div>
  );
}
export default AppRouter;
