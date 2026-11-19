import { useState } from "react";
import App from "./App";
import Film from "./film";
import {sortedMovies} from "./main"

function Movies() {
  const [searchText, setSearchText] = useState("");

  const filteredMovies = sortedMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
<App name="Filmy">
    <input
        id="movie-search"
        type="text"
        className="form-control mb-3"
        placeholder="Wpisz tytuł"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredMovies.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Nie znaleziono filmów
        </div>
      ) : (
      <div className='films row'>
        {filteredMovies.map((movie) => (
          <div className="col-12 col-md-6 col-lg-3" key={movie.name}>
          <Film
          name={movie.name}
          year={movie.year}
          url={movie.url}
          rating={movie.rating}
          recomended={movie.rating >= 8.0 ? true : false}
        />
        </div>))}
      </div>)}
    </App>
  );
}

export default Movies;