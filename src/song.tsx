export interface SongProps{
    /** Tytuł piosenki albumu */
    title: string;

    /** Numer piosenki albumu */
    number?: number;

    /**Długość piosenki albumu */
    length: string;

    /** Funkcja wywoływana po kliknięciu w piosenkę */
    onSongClick?: (songTitle: string) => void;
}

function Song({ number, title, length, onSongClick }: SongProps) {
  return (
    <tr onClick={() => onSongClick?.(title)}>
      <th scope="row">{number}</th>
      <td>{title}</td>
      <td className="text-end">{length}</td>
    </tr>
  );
}

export default Song
