import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Film from './film.tsx'
import Book from './book.tsx'
import Album from './album.tsx'
import type { FilmProps } from './film.tsx'
import type { BookProps } from './book.tsx'
import type { AlbumProps } from './album.tsx'

/** tablica filmów pobierająca FilmProps z pliku film.tsx */
const movies: FilmProps[] = [
  { name: "Jak Ukraść Księżyc", year: 2010, url: "https://fwcdn.pl/fpo/47/74/494774/7333372_2.3.jpg" },
  { name: "Minionki rozrabiają", year: 2013, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSry-HzXDsSCwBz8xEt_BJxAVIvQpj7PgMJF1breYfIrw&s" },
  { name: "Minionki", year: 2015, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMbvdz9qitYZRnvzUA3jbWnp4AkcL6UMO-gWVszH7Zw&s=10" },
]

/** tablica książek pobierająca BookProps z pliku book.tsx */
const books: BookProps[] = [
  { cover: "https://libris.to/media/jacket/44041660o.jpg", title: "Mikołajek", releseYear: 1960, pageNumber: 356 },
  { cover: "https://ecsmedia.pl/cir/n/wakacje-mikolajka-ZDJECIE_OKLADKI_PRZOD_DUZY/0204/14695243131640204.webp", title: "Wakacje Mikołajka", releseYear: 1962, pageNumber: 310 },
  { cover: "https://ecsmedia.pl/cir/n/mikolajek-i-inne-chlopaki-2170759171466740170/55da436262664a81bdfbc432a0683ab0.webp", title: "Mikołajek i inne chłopaki", releseYear: 1963, pageNumber: 235 },
]

/** tablica albumów pobierająca AlbumProps z pliku album.tsx */
const albums: AlbumProps[] = [
  { title: "bunny boy problems", genere: "alternatywny rap", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3f/90/3d/3f903d58-7e48-2355-ab06-e22aaf1a4a4c/26UM1IM16662.rgb.jpg/296x296bb.webp", artistName: 'stickxr', releseYear: 2026, songs: [
        { title: "85", length: "1:28" },
        { title: "wait", length: "2:11" },
        { title: "głupia bae", length: "2:15" },
        { title: "payout", length: "2:42" },
        { title: "to nie ten stan", length: "1:45" },
        { title: "#bunnyfunny", length: "1:57" },
        { title: "to nie te myśli", length: "2:01" },
        { title: "fiji water angel神層", length: "2:14" },
        { title: "bettybop", length: "1:36" },
        { title: "go away", length: "1:59" },
        { title: "rip stickyboi85", length: "2:07" },
        { title: "rany", length: "1:25" },
        { title: "zamykam się", length: "2:08" },] },
  { title: "Hustle As Usual EP", genere: "alternatywny hip-hop", cover: "https://t2.genius.com/unsafe/877x0/https%3A%2F%2Fimages.genius.com%2F1b855ddb5a446bfabaeac0f0b7b326ef.1000x1000x1.png", artistName: 'Belmondawg, Expo 200', releseYear: 2020, songs: [
        { title: "Intro", length: "0:43" },
        { title: "CAPTCHA", length: "2:20" },
        { title: "Te Tereny", length: "2:37" },
        { title: "Agnihotra (skit)", length: "1:11" },
        { title: "Followup", length: "2:33" },
        { title: "Popp Deep (skit)", length: "0:35" },
        { title: "Z.K.C.K", length: "1:25" },
        { title: "Wte I Wewte", length: "3:44" },
        { title: "Pappardelle all'arrabbiata (1988 remix)", length: "2:22" },
        { title: "P.S.W.I.S (DJ Eprom Remix)", length: "1:56" },
        { title: "Poppyn Universe", length: "2:25" },
        { title: "Strona B", length: "2:27" },
  ] }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App name="Filmy" />
    <div className='films'>
      {movies.map((movie) => (<Film
        name={movie.name}
        year={movie.year}
        url={movie.url}
      />))};
    </div>
    <br />
    <App name="Książki" />
    <div className='books'>
      {books.map((book) => (<Book
        title={book.title}
        cover={book.cover}
        releseYear={book.releseYear}
        pageNumber={book.pageNumber}
      />))};
    </div>
    <br />
    <App name="Albums" />
    <div className='albums'>
        {albums.map((album) => (<Album 
          title={album.title}
          genere={album.genere}
          cover={album.cover}
          artistName={album.artistName}
          releseYear={album.releseYear}
          songs={album.songs}
        />))};
    </div>
  </StrictMode>,
)
