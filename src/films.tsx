interface FilmProps {
  name: string;
  year: number;
  url: string;
}

function Film({name, year, url}: FilmProps){    
  return(
    <>
    <div className="film">
    <img src={url} alt={name} height={100} width={100}  />
    <div><h2>{name}</h2>
    <p>Rok produkcji: {year}</p>
    </div></div>
    </>
  )
}

export default Film