import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../routes"
import Shop from '../pages/Shop';
import {BrowserRouter} from 'react-router-dom'
const AppRouter = () => {
  const isAuth = false
  return (
    <BrowserRouter>
    <Shop />
    </BrowserRouter>
    // <Switch>
    // {publicRoutes.map(({path, Component}) =>
    //   <Route key={path} path={path} component={Component} exact />
    // )}
    // </Switch>
  );
};

export default AppRouter;
