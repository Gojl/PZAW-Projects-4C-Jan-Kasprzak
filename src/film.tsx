export interface FilmProps {
  /** Tytuł filmu */
  name: string;

  /** Rok produkcji filmu */
  year: number;

  /** Link do okładki filmu */
  url: string;

  /** Raiting filmu */
  rating: number;

  /** Polecany film, opcjonalne pole które się pojawia podczas gdy film na rating większy od 8.0  */
  recomended?:boolean;
}

function Film({name, year, url, rating, recomended}: FilmProps){   
  return(
    <>
    <div className="film">
      <img src={url} alt={name} height={100} width={100}  />
      <h2>{name}</h2>
      <p>Rok produkcji: {year}</p>
      <p>Rating: {rating}</p>
      {recomended && <p>Polecany</p>}
    </div>
    </>
  )
}

export default Film