import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "Gladiator",
      Description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor.",
      ImagePath:
        "https://phantom-marca.unidadeditorial.es/2e754bc68d560e7e51b5fd4bba1e1c53/resize/660/f/webp/assets/multimedia/imagenes/2023/01/09/16732927392128.jpg",
      Genre: {
        Name: "Drama",
        Description:
          "Drama is the specific mode of fiction represented in performance: a play, opera, mime, ballet, etc., performed in a theatre, or on radio or television.",
      },
      Director: {
        Name: "Ridley Scott",
        Bio: "Sir Ridley Scott is an English film director and producer.",
        Birth: 1937,
      },
    },
    {
      id: 2,
      Title: "Spirited Away",
      Description:
        "During her family's move to the suburbs, a sullen 10 year old girl wanders into a world ruled by gods, witches, and spirits.",
      ImagePath:
        "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_620/MTc0NDg0MTIyODI2NDUwMjgw/movies-like-spirited-away.webp",
      Genre: {
        Name: "Animated",
        Description:
          "A colleciton of illustrations that are photographed frame by frame and then played in quick succession",
      },
      Director: {
        Name: "Hayao Miyazaki",
        Bio: "A japanese animator, director, producer, screenwriter, auther, and manga artist",
        Birth: 1941,
      },
    },
    {
      id: 3,
      Title: "Silence of the Lambs",
      Description:
        "A young FBI cadet must receive the help of an incarcerated and manipulative cannibalkiller to help catch another serial killer.",
      ImagePath:
        "https://culturedvultures.com/wp-content/uploads/2021/08/Silence-of-the-Lambs-1188x675.jpg",
      Genre: {
        Name: "Thriller",
        Description:
          "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
      },
      Director: {
        Name: "Jonathan Demme",
        Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
        Birth: 1944,
      },
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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
