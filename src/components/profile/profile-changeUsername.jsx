import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const ChangeUsername = ({ user, token, onLoggedIn }) => {
  const [newUsername, setNewUsername] = useState("");
  const { Username, Password, Birthday, Email } = user;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: newUsername,
      Password: Password,
      Email: Email,
      Birthday: Birthday,
    };

    fetch(`https://movieapi-yazx.onrender.com/users/${Username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("New username updated", data);
      })
      .catch((error) => {
        alert("Something went wrong: " + error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="currentUsername">
        <Form.Label>Current Username: </Form.Label>
        <Form.Control type="text" value={Username} disabled />
      </Form.Group>
      <Form.Group controlId="newUsername">
        <Form.Label>New Username: </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" variant="dark my-2">
        Submit
      </Button>
    </Form>
  );
};
