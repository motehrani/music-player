import { FC, Dispatch, SetStateAction, MutableRefObject } from 'react'

import { LibrarySong } from './components'

interface LibraryProps {
  songs: {
    name: string
    cover: string
    artist: string
    audio: string
    color: string[]
    id: string
    active: boolean
  }[]
  setSongs: Dispatch<
    SetStateAction<
      {
        name: string
        cover: string
        artist: string
        audio: string
        color: string[]
        id: string
        active: boolean
      }[]
    >
  >
  setCurrentSong: Dispatch<
    SetStateAction<{
      name: string
      cover: string
      artist: string
      audio: string
      color: string[]
      id: string
      active: boolean
    }>
  >
  isPlaying: boolean
  libraryStatus: boolean
  audioRef: MutableRefObject<HTMLAudioElement | null>
}

export const Library: FC<LibraryProps> = ({
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  libraryStatus,
  audioRef,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song, index) => (
          <LibrarySong
            song={song}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
        songs
      </div>
    </div>
  )
}
