import "./movie-view.scss";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movie-view">
      <div>
        <img className="movie-view--img" src={movie.ImagePath} />
      </div>
      <div>
        <div className="movie-view--title">{movie.Title}</div>
        <div>Description: {movie.Description}</div>
      </div>
      <div className="movie-view--directorBox">
        <div>Director: {movie.DirectorName}</div>
        <div>Bio: {movie.DirectorBio}</div>
        <div>Birth: {movie.DirectorBirth}</div>
      </div>
      <div className="movie-view--genreBox">
        <div>Genre: {movie.GenreName}</div>
        <div>Genre description: {movie.GenreDescription}</div>
      </div>
      <Button variant="dark my-2" onClick={onBackClick}>
        Back
      </Button>
    </div>
  );
};
