import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

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
      <div className="movie-view--footer">
        <Link to={`/`}>
          <Button variant="dark my-2">Back</Button>
        </Link>
        <Button variant="dark my-2">+</Button>
      </div>
    </div>
  );
};
