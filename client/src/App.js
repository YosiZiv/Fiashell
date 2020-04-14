import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/main/Main";
import Login from "./components/pages/login/Login";
import "./App.scss";

function App() {
  const routes = (
    <>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/login' component={Login} />
      </Switch>
    </>
  );

  return <div className='App'>{routes}</div>;
}

export default App;
