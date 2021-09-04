import React from "react";
import "./App.css";
import SignupPage from "./Pages/Sign Up";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { store } from "./Global State/Store";
import LoginPage from "./Pages/Login";
import { Provider } from "react-redux";
import HomePage from "./Pages/Home";
import SearchPage from "./Pages/Search";
import BookPage from "./Pages/Book";
import PageNotFound from "./Pages/404Page";
import ScrollToTop from "./Components/Scroll to Top";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JVAjYIVqNzAmNJkn9ul4jJbs2GSNw3QQzBrLDHxjqKZe55q2GEodHZLXMCElBkxPe3WDevsyRiS2CDgPcSBwcVn00rh7qeMwN"
);
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <div className="App">
          <Provider store={store}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/hotels" component={SearchPage} />
            <Elements stripe={promise}>
              <Route exact path="/booking" component={BookPage} />
            </Elements>
          </Provider>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
