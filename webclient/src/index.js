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
import NotAllowed from '../src/components/NotAllowed';
import Privacy from '../src/components/Privacy'; 
  
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import PersistorStore from './store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = PersistorStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route path='/reset' component={Reset}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/AddDrawing' component={AddDrawing}/>
          <Route path='/report' component={Report}/> 
          <Route path='/employees' component={Employees}/>
          <Route path='/inventory' component={Inventory}/>
          <Route path='/privacy' component={Privacy}/>
          <Route path='/notAllowed' component={NotAllowed}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </PersistGate>
    </Provider>, document.getElementById('root')
);

