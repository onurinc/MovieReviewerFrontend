import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./PosterRow.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function PosterRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="main_poster_row">
      <h2>{title}</h2>
      <div className="all_poster_rows">
        {movies.map((movie) => (
          <img
            className="poster_row"
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PosterRow;
