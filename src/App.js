import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top from "./pages/Top";
import Watch from "./pages/Watch";
import Style from "./App.css";

function App() {
  return (
    <Router className={Style} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/watch" component={Watch} />
      </Switch>
    </Router>
  );
}

export default App;
