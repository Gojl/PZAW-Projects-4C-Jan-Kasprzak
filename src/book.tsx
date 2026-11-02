export interface BookProps {
    /** Link do okładki książki */
    cover: string;

    /** Tytuł książki */
    title: string;

    /** Rok wydania książki */
    releseYear: number;

    /** Liczba stron w książce*/
    pageNumber: number;
}

function Book({cover, title, releseYear, pageNumber}: BookProps){
    return(
        <>
        <div className="book">
            <img src={cover} alt={title} height={100} width={100}  />
            <h2>{title}</h2>
            <p>Rok wydania: {releseYear}</p>
            <p>Liczba stron: {pageNumber}</p>
        </div>
        </>
    )
}

export default Book