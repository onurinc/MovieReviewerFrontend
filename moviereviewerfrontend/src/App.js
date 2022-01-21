import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Register from "./Pages/Register";
import Comments from "./Pages/Comments";
import Reviews from "./Pages/Reviews";
import Actors from "./Pages/Actors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <main className="form-signin">
        <Router basename="/MovieReviewerFrontend">
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
              <Route exact path="/actors">
                <Actors />
              </Route>
              <Route exact path="/movie/:id">
                <Movie />
              </Route>
              <Route exact path="/movie/:id/comments">
                <Comments />
              </Route>
              <Route exact path="/movie/:id/reviews">
                <Reviews />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
