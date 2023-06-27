import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { ViewFavorites } from "../favorites/view-favorites";

import "./profile-view.scss";
import { DeleteProfile } from "./profile-delete";

export const ProfileView = ({ user, movies, updateUser, onLoggedOut }) => {
  const Bday = new Date(user.Birthday);
  const { FavoriteMovies } = user;

  return (
    <Container>
      <p className="profileView--heading">My Profile</p>
      <Row>
        <Col md={8}>
          <div className="profileView--container">
            <Form>
              <Form.Group controlId="changeUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={user.Username} disabled />
              </Form.Group>

              <Form.Group controlId="changePassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={user.Password} disabled />
              </Form.Group>

              <Form.Group controlId="changeEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={user.Email} disabled />
              </Form.Group>

              <Form.Group controlId="changeBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                  type="birthday"
                  value={Bday.toLocaleDateString()}
                  disabled
                />
              </Form.Group>

              <div className="profileView--btnsContainer">
                <Link to="./update">
                  <Button variant="dark my-2">Edit Profile</Button>
                </Link>

                <Link to="./login">
                  <DeleteProfile user={user} onLoggedOut={onLoggedOut} />
                </Link>
              </div>
            </Form>
          </div>
        </Col>

        <Col>
          <ViewFavorites
            FavoriteMovies={FavoriteMovies}
            movies={movies}
            updateUser={updateUser}
            user={user}
          />
        </Col>
      </Row>
    </Container>
  );
};
