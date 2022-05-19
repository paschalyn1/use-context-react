import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import React from "react";

function Form() {
  const [addmovies, setaddmovies] = useState(" ");
  const [addprice, setaddprice] = useState(" ");
  const [movies, setMovies] = useContext(MovieContext);

  const addnew = (e) => {
    e.preventDefault();
    setMovies((allmovies) => [
      ...allmovies,
      { name: addmovies, price: addprice }
    ]);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={addmovies}
          onChange={(e) => setaddmovies(e.target.value)}
        />
        <input
          type="text"
          value={addprice}
          onChange={(e) => setaddprice(e.target.value)}
        />
        <button onClick={addnew}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
