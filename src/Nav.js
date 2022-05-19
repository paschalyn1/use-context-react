import react, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <ul>
        <li>PASCIE JKAMSO</li>
        <li>
          Movie List <i>{Math.floor(Math.random() * 6)}</i>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
