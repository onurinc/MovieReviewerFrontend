import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { Form, Button } from "react-bootstrap";
import "./Styling/Comments.css";

function Reviews() {
  axios.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem("token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { id } = useParams();
  const [body, setBody] = useState({});
  const [rating, setRating] = useState({});
  const data = { movieId: id, body: body, rating: rating };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:4443/api/Reviews/", { ...data })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <>
      <NavMenu />
      <Form>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter review"
            onChange={(e) => setBody(e.target.value)}
          />
          <Form.Text className="text-muted">
            If you want to elaborate more about the movie, feel free to leave a
            review!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter rating"
            onChange={(e) => setRating(e.target.value)}
          />
          <Form.Text className="text-muted">
            Put a rating inbetween 0 and 10
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Reviews;
