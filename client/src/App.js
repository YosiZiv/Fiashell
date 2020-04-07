import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/main/Main";
import "./App.scss";

function App() {
  const routes = (
    <>
      <Switch>
        <Route path='/' component={Main} exact />
      </Switch>
    </>
  );

  return (
    <div className='App'>
      <main>{routes}</main>
    </div>
  );
}

export default App;
