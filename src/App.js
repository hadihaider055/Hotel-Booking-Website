import React from "react";
import "./App.css";
import SignupPage from "./Pages/Sign Up";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "./Global State/Store";
import LoginPage from "./Pages/Login";
import { Provider } from "react-redux";
import HomePage from "./Pages/Home";
import SearchPage from "./Pages/Search";
import BookPage from "./Pages/Book";
import ScrollToTop from "./Components/Scroll to Top";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/hotels" component={SearchPage} />
            <Route exact path="/booking" component={BookPage} />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
