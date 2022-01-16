import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { Form, Button } from "react-bootstrap";
import "./Styling/Movie.css";

function Movie() {
  const { id } = useParams();
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movie, SetMovie] = useState("");

  const getMovie = () => {
    axios
      .get(
        `/movie/${id}?api_key=2c4e627dfa7f8e9e95eaeda275c7925a&language=en-US`
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
      <h1>{movie.original_title}</h1>
      <div>Description: {movie.overview}</div>
      <div>Movie homepage: {movie.homepage}</div>
      <img
        className="poster_main"
        key={movie.id}
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name}
      />

      <Button
        variant="primary"
        type="submit"
        onClick={() => onClickReview(movie.id)}
      >
        Reviews
      </Button>
      <Button
        variant="primary"
        type="submit"
        onClick={() => onClickComment(movie.id)}
      >
        Comments
      </Button>
    </>
  );
}

export default Movie;
