export interface FilmProps {
  /** Tytuł filmu */
  name: string;

  /** Rok produkcji filmu */
  year: number;

  /** Link do okładki filmu */
  url: string;

  /** Raiting filmu */
  rating: number;
}

function Film({name, year, url, rating}: FilmProps){   
  return(
    <>
    <div className="film">
      <img src={url} alt={name} height={100} width={100}  />
      <h2>{name}</h2>
      <p>Rok produkcji: {year}</p>
      <p>Rating: {rating}</p>
    </div>
    </>
  )
}

export default Film