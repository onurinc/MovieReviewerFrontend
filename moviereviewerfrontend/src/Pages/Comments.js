import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { Form, Button } from "react-bootstrap";
import "./Styling/Comments.css";

function Comments() {
  const { id } = useParams();
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

  useEffect(() => {
    console.log(id);
    getComments();
  }, []);

  const data = { movieId: id, body: body };

  return (
    <>
      <NavMenu />
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  );
}

export default Comments;
