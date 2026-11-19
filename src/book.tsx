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
        <div className="card h-100">
            <img src={cover} alt={title} height={100} width={100} className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">Rok wydania: {releseYear}</p>
                <p className="card-text">Liczba stron: {pageNumber}</p>
                {classic && <p className="badge text-bg-primary">Klasyka</p>}
            </div>
        </div>
        </>
    )
}

export default Book