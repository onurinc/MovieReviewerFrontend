import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { Form, Button, Card } from "react-bootstrap";
import "./Styling/Movie.css";

function Movie() {
  const { id } = useParams();
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movie, SetMovie] = useState("");

  const [reviews, SetReviews] = useState([]);
  const [comments, SetComments] = useState([]);
  const [body, setBody] = useState("");
  const getComments = () => {
    axios
      .get(`https://localhost:4443/api/Comments/movieid/${id}`)
      .then((response) => {
        SetComments(response.data);
        console.log(response);
      })
      .catch((error) => console.error("Error: ${error}"));
  };

  const getReviews = () => {
    axios
      .get(`https://localhost:4443/api/Reviews/movieid/${id}`)
      .then((response) => {
        SetReviews(response.data);
        console.log(response);
      })
      .catch((error) => console.error("Error: ${error}"));
  };

  useEffect(() => {
    console.log(id);
    getReviews();
    getComments();
  }, []);

  const data = { movieId: id, body: body };

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2c4e627dfa7f8e9e95eaeda275c7925a&language=en-US`
      )
      .then((response) => {
        SetMovie(response.data);
        console.log(response);
      })
      .catch((error) => console.error("Error: ${error}"));
  };

  useEffect(() => {
    console.log(id);
    getMovie();
  }, []);

  const onClickReview = (props) => {
    window.location.href = "/movie/" + props + "/reviews";
  };
  const onClickComment = (props) => {
    window.location.href = "/movie/" + props + "/comments";
  };

  return (
    <>
      <NavMenu />
      <div className="row">
        <Card className="col-sm-7">
          <Card.Header style={{ fontSize: 32 }}>
            {movie.original_title}
          </Card.Header>
          <Card.Body>
            <h2>Movie title </h2>
            <p>{movie.original_title}</p>
            <h2>Tag line</h2>
            <p>{movie.tagline}</p>
            <h2>Description</h2>
            <p>{movie.overview}</p>
            <h2>Status</h2>
            <p>{movie.status}</p>
            <h2>Runtime</h2>
            <p>{movie.runtime}</p>
            <h2>Vote average</h2>
            <p>{movie.vote_average}</p>
            <h2>Movie homepage</h2>
            <a href={movie.homepage} target={"_blank"}>
              {movie.homepage}
            </a>
          </Card.Body>
        </Card>

        <Card className="col-sm-3">
          <Card.Header style={{ fontSize: 32 }}>Movie poster</Card.Header>
          <Card.Img
            style={{ padding: "10px", borderRadius: "50px" }}
            src={`${base_url}${movie.poster_path}`}
          />

          {/* <img
        className="poster_main"
        key={movie.id}
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name}
      /> */}
        </Card>
      </div>

      <div className="row">
        <Card className="col-sm-4">
          <Card.Header style={{ fontSize: 32 }}>Comments</Card.Header>
          <Card.Body>
            <div>
              {comments.length ? (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="row rounded m-2 p-2"
                    style={{ backgroundColor: "#262626" }}
                  >
                    <div className="col-12">{comment.body}</div>
                    <div className="col-12">User: {comment.userId}</div>
                  </div>
                ))
              ) : (
                <>
                  <h3>
                    there are no comments yet, be the first one to write a
                    comment!
                  </h3>
                </>
              )}
            </div>
          </Card.Body>

          <Card.Footer className="text-muted">
            <Button
              className="btn-block"
              variant="primary"
              type="submit"
              onClick={() => onClickComment(movie.id)}
            >
              Post comment
            </Button>
          </Card.Footer>
        </Card>

        <Card className="col-sm-4">
          <Card.Header style={{ fontSize: 32 }}>Reviews</Card.Header>
          <Card.Body>
            <div>
              {reviews.length ? (
                reviews.map((review) => (
                  <div
                    key={review.id}
                    className="row rounded m-2 p-2"
                    style={{ backgroundColor: "#262626" }}
                  >
                    <div className="col-12">{review.body}</div>
                    <div className="col-12">Rating: {review.rating}</div>
                    <div className="col-12">User: {review.userId}</div>
                  </div>
                ))
              ) : (
                <>
                  <h3>
                    there are no reviews yet, be the first one to write a
                    comment!
                  </h3>
                </>
              )}
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button
              className="float-right"
              variant="primary"
              type="submit"
              onClick={() => onClickReview(movie.id)}
            >
              Reviews
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default Movie;
