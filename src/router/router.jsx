import React, { Component, Fragment } from "react";
import { BrowserRouter,Route } from "react-router-dom";
import {history} from 'react-router';
import Home from '../page/home';
import Login from '../page/login';
import Register from '../page/register';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path={`/`} component={Home} />
          <Route path={`/login`} component={Login} />
          <Route path={`/register`} component={Register} />
      </BrowserRouter>
    );
  }
}
export default App;