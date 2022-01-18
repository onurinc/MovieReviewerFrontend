import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { Form, Button, Card } from "react-bootstrap";

function Actors() {
  const { id } = useParams();
  const base_url = "https://image.tmdb.org/t/p/w500/";
  const [people, SetPeople] = useState([]);

  const getPeople = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=2c4e627dfa7f8e9e95eaeda275c7925a&language=en-US`
      )
      .then((response) => {
        SetPeople(response.data.results);
        // console.log(response);
      })
      .catch((error) => console.error("Error: ${error}"));
  };

  useEffect(() => {
    console.log(id);
    getPeople();
  }, []);


  return (
    <>

      <NavMenu />

      {console.log(people)}
      <div className="d-flex flex-wrap container">

        {people.map(p => (

          <div className="rounded" style={{ backgroundColor: "#262626", margin: "10px", padding: "10px", maxWidth: "14rem", border: "10px" }}>
            <h3 style={{ fontSize: 22 }} >{p.name}</h3>
            <img style={{ padding: "10px", width: "12rem", height: "auto" }} src={`${base_url}${p.profile_path}`} />
            <p>known for:</p>
            <ul>
              {p.known_for.map(k => (
                <li>{k.original_title
                || k.original_name}</li>
              ))}
            </ul>

          </div>

        ))}
      </div>
    </>
  );
}

export default Actors;
