import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./BackdropRow.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const imageClick = (props) => {
    window.location.href = "/movie/" + props;
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="all__row__backdrops">
        {movies.map((movie) => (
          <img
            onClick={() => imageClick(movie.id)}
            key={movie.id}
            className={`row__backdrop `}
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
