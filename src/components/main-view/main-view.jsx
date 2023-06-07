import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://movieapi-yazx.onrender.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            Title: movie.Title,
            ImagePath: movie.ImagePath,
            Description: movie.Description,
            DirectorName: movie.Director.Name,
            DirectorBio: movie.Director.Bio,
            DirectorBirth: movie.Director.Birth,
            GenreName: movie.Genre.Name,
            GenreDescription: movie.Genre.Description,
          };
        });
        setMovies(moviesFromApi);
        console.log(movies);
      });
    // .then((data) => console.log(data));
  }, []);

  if (movies.length === 0) {
    return <div>The list is empty</div>;
  }

  if (selectedMovie) {
    return (
      <div>
        <MovieView
          movie={selectedMovie}
          onBackClick={() => {
            setSelectedMovie(null);
          }}
        />
      </div>
    );
  }

  return (
    <div className="main-view">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
