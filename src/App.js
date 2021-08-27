import React from "react";
import "./App.css";
import SignupPage from "./Pages/Sign Up";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "./Global State/Store";
import LoginPage from "./Pages/Login";
import { Provider } from "react-redux";
function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
