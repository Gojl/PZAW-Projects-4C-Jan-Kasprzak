import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

interface AppProps {
  /** Nazwa do wyświetlenia */
  name: string;

  /** id Inputu do wyszukiwania */
  searchId: string;

  /** dziecko przekazywane do komponentu aby móc manipulować jego wyświetlaniem */
  children?: React.ReactNode;
}



function App({ name, searchId, children }: AppProps){
  const [isOpen, setIsOpen] = useState(true);
  const [searchText, setSearchText] = useState("");

  return(
    <>
    <h1 className="text-center"
      onClick={() => setIsOpen((prev) => !prev)}>

      {name} {isOpen ? "▾" : "▸"}
    </h1>
    <br />
    {isOpen && (
        <>
          <input
            id={searchId}
            type="text"
            className="form-control mb-3"
            placeholder="Wpisz tytuł"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <p>Szukana fraza: {searchText}</p>
          {children}
        </>
      )}
    </>
  )
}

export default App