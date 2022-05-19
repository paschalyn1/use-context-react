import "./styles.css";
import MovieList from "./movieList.js";
import Nav from "./Nav.js";
import Form from "./Form.js";
import { MovieProvider } from "./MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Form />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
