import { useState } from "react";
import App from "./App";
import {albums} from "./main"
import Album from "./album";

function Albums() {
  const [searchText, setSearchText] = useState("");

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
<App name="Albumy">
    <input
        id="album-search"
        type="text"
        className="form-control mb-3"
        placeholder="Wpisz tytuł"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredAlbums.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Nie znaleziono albumów
        </div>
      ) : (
      <div className='films row'>
        {filteredAlbums.map((album) => (
                <div className="col-12 col-md-6 col-lg-3" key={album.title}>
                <Album
                title={album.title}
                cover={album.cover}
                releseYear={album.releseYear}
                songs={album.songs}
                genere={album.genere}
                artistName={album.artistName}
                emptyAlbum={album.songs.length === 0 ? true : false}
            />
            </div>))}
      </div>)}
    </App>
  );
}

export default Albums;


{/* <App name="Albumy">
    <div className='albums row'>
      {albums.map((album) => (
        <div className="col-12 col-md-6 col-lg-3" key={album.title}>
          <Album
            title={album.title}
            genere={album.genere}
            cover={album.cover}
            artistName={album.artistName}
            releseYear={album.releseYear}
        emptyAlbum={album.songs.length === 0 ? true : false}
        songs={album.songs}
      />
      </div>))}
    </div>
    </App> */}