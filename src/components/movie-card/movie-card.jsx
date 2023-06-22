import { PropTypes } from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./movie-card.scss";
import { useEffect } from "react";

export const MovieCard = ({ movie }) => {
  const handleAddMovie = () => (movie) => {};

  return (
    <Card className="h-100">
      <Link
        to={`/movies/${encodeURIComponent(movie.id)}`}
        style={{ textDecoration: "none" }}
      >
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Button variant="dark">+</Button>
        </Card.Body>
      </Link>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
