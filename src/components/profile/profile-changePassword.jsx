import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const ChangePassword = ({ user, token, onLoggedIn }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { Username, Password, Birthday, Email } = user;

  const data = {
    Username: Username,
    Password: newPassword,
    Email: Email,
    Birthday: Birthday,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://movieapi-yazx.onrender.com/users/${Username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.Username) {
          alert("Password updated");
          localStorage.setItem("user", null);
          localStorage.setItem("token", null);
          onLoggedIn(res.user, res.token);
        } else {
          alert("Unable to update, try again later");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="newPassword">
        <Form.Label>New Password: </Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="confirmNewPassword">
        <Form.Label>Enter New Password Again </Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="dark my-2">
        Submit
      </Button>
    </Form>
  );
};
