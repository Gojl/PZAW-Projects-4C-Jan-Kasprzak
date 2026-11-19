import { useState } from "react";
import App from "./App";
import Book from "./book";
import {books} from "./main"

function Books() {
  const [searchText, setSearchText] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
<App name="Książki">
    <input
        id="book-search"
        type="text"
        className="form-control mb-3"
        placeholder="Wpisz tytuł"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {filteredBooks.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Nie znaleziono książek
        </div>
      ) : (
      <div className='films row'>
        {filteredBooks.map((book) => (
                <div className="col-12 col-md-6 col-lg-3" key={book.title}>
                <Book
                title={book.title}
                cover={book.cover}
                releseYear={book.releseYear}
                pageNumber={book.pageNumber}
                classic={book.releseYear < 2000 ? true : false}
            />
            </div>))}
      </div>)}
    </App>
  );
}

export default Books;