import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "harrypotter",
      price: "$20",
      date: "30 Jun",
      id: "200"
    },
    {
      name: "harrypotter",
      price: "$20",
      date: "30 Jun",
      id: "100"
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
