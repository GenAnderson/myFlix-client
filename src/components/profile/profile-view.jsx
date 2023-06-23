import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./profile-view.scss";

export const ProfileView = ({ user }) => {
  const { Username, Password, Email, Birthday, FavoriteMovies } = user;
  const Bday = new Date(Birthday);

  return (
    <Container>
      <p className="profileView--heading">My Profile</p>
      <Row>
        <Col md={8}>
          <div className="profileView--container">
            <Form>
              <Form.Group controlId="changeUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" value={Username} disabled />
              </Form.Group>

              <Form.Group controlId="changePassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={Password} disabled />
              </Form.Group>

              <Form.Group controlId="changeEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" value={Email} disabled />
              </Form.Group>

              <Form.Group controlId="changeBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                  type="birthday"
                  value={Bday.toLocaleDateString()}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="changeFavoriteMovies">
                <Form.Label>Favorite Movies:</Form.Label>
                <Form.Control
                  type="text"
                  value={`${
                    FavoriteMovies.length === 0
                      ? "No Favorites"
                      : FavoriteMovies
                  }`}
                  disabled
                />
              </Form.Group>

              <div className="profileView--btnsContainer">
                <Link to="./update">
                  <Button variant="dark my-2">Edit Profile</Button>
                </Link>
                <Button variant="outline-danger my-2">Delete Profile</Button>
              </div>
            </Form>
          </div>
        </Col>

        <Col>
          <div className="Favorites-container">
            <p>Favorites</p>
            {FavoriteMovies.map((movie) => {
              return <p>{movie}</p>;
            })}
            <Button variant="dark" size="sm">
              Edit favorites
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
