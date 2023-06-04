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
      <div>
        <div>Director: {movie.Director.Name}</div>
        <div>Bio: {movie.Director.Bio}</div>
        <div>Birth: {movie.Director.Birth}</div>
      </div>
      <div>
        <div>Genre: {movie.Genre.Name}</div>
        <div>Genre description: {movie.Genre.Description}</div>
      </div>
      <button className="movie-view--btn" onClick={onBackClick}>
        Back
      </button>
    </div>
  );
};
