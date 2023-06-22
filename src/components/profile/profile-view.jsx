import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./profile-view.scss";

export const ProfileView = ({ user }) => {
  const { Username, Password, Email, Birthday, FavoriteMovies } = user;
  const Bday = new Date(Birthday);

  return (
    <div className="profileView--container">
      <Form disabled>
        <p className="profileView--heading">My Profile</p>
        <Form.Group controlId="changeUsername">
          <Form.Label>
            Username:
            <Link to="./change-username">Change → </Link>
          </Form.Label>
          <Form.Control type="text" value={Username} disabled />
        </Form.Group>

        <Form.Group controlId="changePassword">
          <Form.Label>
            Password: <Link to="./change-password">Change → </Link>
          </Form.Label>
          <Form.Control type="password" value={Password} disabled />
        </Form.Group>
        <Form.Group controlId="changeEmail">
          <Form.Label>
            Email: <Link to="./change-email">Change → </Link>
          </Form.Label>
          <Form.Control type="email" value={Email} disabled />
        </Form.Group>
        <Form.Group controlId="changeBirthday">
          <Form.Label>
            Birthday: <Link to="./change-birthday">Change → </Link>
          </Form.Label>
          <Form.Control type="birthday" value={Bday.toDateString()} disabled />
        </Form.Group>
        <Form.Group controlId="changeFavoriteMovies">
          <Form.Label>
            Favorite Movies: <Link to="./change-username">Change → </Link>
          </Form.Label>
          <Form.Control
            type="text"
            value={`${
              FavoriteMovies.length === 0 ? "No Favorites" : FavoriteMovies
            }`}
            disabled
          />
        </Form.Group>
        <Button variant="dark my-2">Delete Profile</Button>
      </Form>
    </div>
  );
};
