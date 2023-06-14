import { PropTypes } from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      className="movie-card"
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <div className="movie-card--title">{movie.Title}</div>
      <img className="movie-card--img" src={movie.ImagePath} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
