import React, { useContext } from "react";
import Movie from "./Movie.js";
import { MovieContext } from "./MovieContext.js";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          id={"The id of this movie is " + movie.id}
          movies={movie.name}
          price={movie.price}
        />
      ))}
    </div>
  );
};

export default MovieList;
