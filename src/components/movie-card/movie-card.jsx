import { PropTypes } from "prop-types";
import { Card } from "react-bootstrap";

import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    // <div
    //   className="movie-card"
    //   onClick={() => {
    //     onMovieClick(movie);
    //   }}
    // >
    //   <div className="movie-card--title">{movie.Title}</div>
    //   <div className="movie-card--imgContainer">
    //     <img className="movie-card--img" src={movie.ImagePath} />
    //   </div>
    // </div>
    <Card
      className="h-100"
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
