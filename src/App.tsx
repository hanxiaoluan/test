import React from "react";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail/:_uid" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
