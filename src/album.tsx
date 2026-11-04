import Song from './song.tsx';
import type {SongProps} from './song.tsx';

export interface AlbumProps{
    /**Tytuł albumu */
    title: string;

    /**Link do okładki albumu */
    cover: string;

    /**Nazwa wykonawcy albumu */
    artistName: string;

    /**Data wydania albumu */
    releseYear: number;

    /**gatunek muzyczny albumu */
    genere: string;

    /**Lista piosenek przekazywanych do Song */
    songs: SongProps[];

    /** Czy album jest pusty, opcjonalna wartość */
    emptyAlbum?: boolean;
}

function Album({title, cover, artistName, releseYear, genere, songs, emptyAlbum}: AlbumProps){
    return(  
    <>
    <div className='album'>
        <img src={cover} alt={title} height={100} width={100} />
        <h2>{title}</h2>
        <p>{artistName}</p>
        <p>{releseYear}</p>
        <p>{genere}</p>
        {emptyAlbum ? <p>Album jest pusty</p> :
        <ol>
            {songs.map((song, index) =>
            <li key={index}>
            <Song title={song.title} length={song.length} />
            </li>
            )}
        </ol>}
    </div>
    </>
    )
}

export default Album