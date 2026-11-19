import 'bootstrap/dist/css/bootstrap.min.css'

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
    <div className="card h-100" onClick={() => console.log(`Wybrano film: ${name}`)}>
      <img src={url} alt={name} height={200} width={100} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Rok produkcji: {year}</p>
        <button className="btn btn-primary" onClick={(event) => {
          event.stopPropagation();
          console.log(`Pokaż szczegóły dla ${name}`);
        }}>Pokaż szczegóły</button>
        <p className="card-text">Rating: {rating}</p>
        {recomended && <p className="badge text-bg-success">Polecany</p>}
      </div>
    </div>
    </>
  )
}

export default Film