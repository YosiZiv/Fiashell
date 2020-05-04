import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/main/Main";
import Register from "./components/pages/main/Main";
import Login from "./components/pages/main/Main";
import Navigation from "./components/layouts/Navigation/Navigation";
import "./App.scss";

function App() {
  const routes = (
    <>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );

  return (
    <div className='App'>
      <Navigation isAuth={true} />
      {routes}
    </div>
  );
}

export default App;
