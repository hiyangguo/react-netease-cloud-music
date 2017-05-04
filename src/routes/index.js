import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../containers/Home';
import ListDetail from '../containers/ListDetail';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path="/list/:id" component={ListDetail}/>
  </Route>
)