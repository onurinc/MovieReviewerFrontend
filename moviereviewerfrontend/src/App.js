import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
              <Route exact path="/movie/:id">
                <Movie />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
