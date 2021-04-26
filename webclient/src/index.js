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
import firebase from './Firebase';

firebase.auth().onAuthStateChanged(function(user){
  if(user){
    ReactDOM.render(
      <Router>
          <Switch>
            <Route path='/reset' component={Reset}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/AddDrawing' component={AddDrawing}/>
            <Route path='/Report' component={Report}/> 
            <Route path='/Employees' component={Employees}/>
            <Route path='/' component={Home}/>
          </Switch>
      </Router>, document.getElementById('root')
    );    
  }
  else{
    ReactDOM.render(
      <Router>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/reset' component={Reset}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Login}/>
            <Route path='/AddDrawing' component={Login}/>
            <Route path='/Report' component={Login}/> 
            <Route path='/Employees' component={Login}/>
            <Route path='/' component={Login}/>
          </Switch>
      </Router>, document.getElementById('root')
    );   
  }
})

