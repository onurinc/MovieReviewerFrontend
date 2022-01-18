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
<div className= "row">
      <Card className = "col-sm-7">
  <Card.Header style = {{fontSize: 32}}>{movie.original_title}</Card.Header>
  <Card.Body>
  <h2>Movie title </h2>
      <p>{movie.original_title}</p>
      <h2>Tag line</h2>
      <p>{movie.tagline}</p>
      <h2>Description</h2>
      <p>{movie.overview}</p>
      <h2>Movie homepage</h2>
      <p>{movie.homepage}</p>
  </Card.Body>
</Card>


<Card className = "col-sm-3"  >
<Card.Header style = {{fontSize: 32}}>Movie poster</Card.Header>
<Card.Img style = {{ padding:"10px", cornerRadius:"50px"}} src={`${base_url}${movie.poster_path}`} />
      
      {/* <img
        className="poster_main"
        key={movie.id}
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name}
      /> */}
      </Card>
      </div>

      <div className= "row">
      <Card className = "col-sm-4">
  <Card.Header style = {{fontSize: 32}}>Comments</Card.Header>
  <Card.Body>
  <Button
        variant="primary"
        type="submit"
        onClick={() => onClickReview(movie.id)}
      >
        Reviews
      </Button>
  </Card.Body>
</Card>


<Card className = "col-sm-4"  >
<Card.Header style = {{fontSize: 32}}>Reviews</Card.Header>
<Button
        variant="primary"
        type="submit"
        onClick={() => onClickComment(movie.id)}
      >
        Comments
      </Button>
      </Card>
      </div>

    </>
  );
}

export default Movie;
