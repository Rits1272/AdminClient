import React from 'react';
import ReactDOM from 'react-dom';

import Login from '../src/components/Login';
import Reset from '../src/components/Reset';
import Home from '../src/components/Home';
import Register from '../src/components/Register';
import AddDrawing from '../src/components/AddDrawing';
import Report from '../src/components/Report';
import Employees from '../src/components/Employees';

import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
        <Route path='/reset' component={Reset}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/AddDrawing' component={AddDrawing}/>
      <Route path='/report' component={Report}/> 
      <Route path='/employees' component={Employees}/>
      <Route path='/' component={Home}/>
    </Switch>
  </Router>, document.getElementById('root')
)

