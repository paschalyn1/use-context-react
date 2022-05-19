import React from "react";

const Movie = ({ movies, price, id }) => {
  return (
    <div>
      <h3>{movies}</h3>
      <p>{price}</p>
      <p>{id}</p>
    </div>
  );
};

export default Movie;
