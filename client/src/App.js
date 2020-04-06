import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const routes = (
    <React.Fragment>
      <Switch>
        <Route path='/' component={<h1>test</h1>} exact />
      </Switch>
    </React.Fragment>
  );

  return (
    <div className='App'>
      <main>{routes}</main>
    </div>
  );
}

export default App;
