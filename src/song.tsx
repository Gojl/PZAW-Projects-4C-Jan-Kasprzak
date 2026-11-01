export interface SongProps{
    /** Tytuł piosenki albumu */
    title: string;

    /**Długość piosenki albumu */
    length: string;
}

function Song({title, length}: SongProps){
    return(
    <>
    <p>{title} - {length}</p>
    </>
    )
}

export default Song
