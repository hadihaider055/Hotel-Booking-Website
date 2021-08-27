import React from "react";
import "./App.css";
import SignupPage from "./Pages/Sign Up";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "./Global State/Store";
import LoginPage from "./Pages/Login";
import { Provider } from "react-redux";
import HomePage from "./Pages/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
