import Banner from "./Banner";
import requests from "./requests";
import PosterRow from "./PosterRow";
import BackdropRow from "./BackdropRow";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import "./App.css";
import Nav from "./Components/Nav";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main className="form-signin">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
