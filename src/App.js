import React from 'react';
import { Route, Switch,  } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
// import Error404 from './pages/Error404/Error404';

import './reset.css';
import './common.css';
import Error404 from './pages/Error404/Error404';

export default function App(){
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}

