import { MovieCard } from "../movie-card/movie-card";

import "./view-favorites.scss";

export const ViewFavorites = ({ user, FavoriteMovies, movies, updateUser }) => {
  const favorites = movies.filter((m) => FavoriteMovies.includes(m.id));

  return (
    <div className="favorites-container">
      <h5>Favorites: </h5>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} user={user} updateUser={updateUser} />
          </li>
        ))}
      </ul>
    </div>
  );
};
