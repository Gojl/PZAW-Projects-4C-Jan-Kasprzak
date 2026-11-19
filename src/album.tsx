import Song from './song.tsx';
import type { SongProps } from './song.tsx';

export interface AlbumProps {
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

function Album({ title, cover, artistName, releseYear, genere, songs, emptyAlbum }: AlbumProps) {
    function handleSongClick(songTitle: string) {
    console.log(`Utwór: ${songTitle}, album: ${title}`);
  }
    return (
        <>
            <div className='card'>
                <img src={cover} alt={title} height={100} width={100} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{artistName}</p>
                    <p className="card-text">{releseYear}</p>
                    <p className="card-text">{genere}</p>
                </div>
                {emptyAlbum ? <div className="alert alert-danger mb-0">
                    Album jest pusty
                </div> :
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tytuł</th>
                                <th className="text-end">Czas trwania</th>
                            </tr>
                        </thead>
                        <tbody>
                            {songs.map((song, index) => (
                                <Song key={index} number={index + 1} title={song.title} length={song.length} onSongClick={handleSongClick} />
                            ))}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default Album