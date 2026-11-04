export interface BookProps {
    /** Link do okładki książki */
    cover: string;

    /** Tytuł książki */
    title: string;

    /** Rok wydania książki */
    releseYear: number;

    /** Liczba stron w książce*/
    pageNumber: number;

    /** Klasyka, opcjonalne pole które się pojawia podczas gdy książka jest starsza niz 2000 rok */
    classic?: boolean;
}

function Book({cover, title, releseYear, pageNumber, classic}: BookProps){
    return(
        <>
        <div className="book">
            <img src={cover} alt={title} height={100} width={100}  />
            <h2>{title}</h2>
            <p>Rok wydania: {releseYear}</p>
            <p>Liczba stron: {pageNumber}</p>
            {classic && <p>Klasyka</p>}
        </div>
        </>
    )
}

export default Book