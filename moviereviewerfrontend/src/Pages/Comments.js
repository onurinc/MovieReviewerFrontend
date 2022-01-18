import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import { Form, Button } from "react-bootstrap";
import "./Styling/Comments.css";

function Comments() {
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
  const data = { movieId: id, body: body };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:4443/api/Comments/", { ...data })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <>
      <NavMenu />
      <Form>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter comment"
            onChange={(e) => setBody(e.target.value)}
          />
          <Form.Text className="text-muted">
            If you want to elaborate more about the movie, feel free to leave a
            review!
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Comments;
