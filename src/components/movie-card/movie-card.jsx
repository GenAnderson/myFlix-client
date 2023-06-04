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
