import React, { useState } from "react";
import NavMenu from "../Components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./Styling/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email: email, password: password };
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://localhost:4443/api/Accounts/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("token", data.result.token);
        localStorage.setItem("loggedIn", "true");
        window.location = "/";
      })
      //Then with the error genereted...
      .catch((error) => {
        setShow(true);
        console.error("Error:", error);
      });
  };

  return (
    <>
      <NavMenu />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login;
