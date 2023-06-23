import { Button } from "react-bootstrap";

export const AddFavorite = ({ movieId }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const addFavoriteHandler = (event) => {
    event.preventDefault();

    fetch(
      `https://movieapi-yazx.onrender.com/users/${storedUser.Username}/movies/${movieId}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${storedToken}` },
      }
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("Movie added to favorites");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => alert("Something went wrong: " + error));
  };

  return (
    <Button variant="dark my-2" onClick={addFavoriteHandler}>
      +
    </Button>
  );
};
