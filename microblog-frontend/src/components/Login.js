import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { username, password } = state;

  const onChange = (event) => {
    setState({ ...state, [event.target.name]: [event.target.value] });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={username}
                  onChange={onChange}
                ></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Card.Text>
          <div className="d-grid gap-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
