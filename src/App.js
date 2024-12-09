import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/registration/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        {/* Redirect from default path */}
      </Switch>
    </Router>
  );
}

export default App;
