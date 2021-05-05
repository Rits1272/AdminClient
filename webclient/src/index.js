import React from 'react';
import ReactDOM from 'react-dom';

import Login from '../src/components/Login';
import Reset from '../src/components/Reset';
import Home from '../src/components/Home';
import Register from '../src/components/Register';
import AddDrawing from '../src/components/AddDrawing';
import Report from '../src/components/Report';
import Inventory from '../src/components/Inventory';
import Employees from '../src/components/Employees';
  
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/reset' component={Reset}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/AddDrawing' component={AddDrawing}/>
        <Route path='/report' component={Report}/> 
        <Route path='/employees' component={Employees}/>
        <Route path='/inventory' component={Inventory}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
    </Provider>, document.getElementById('root')
);

