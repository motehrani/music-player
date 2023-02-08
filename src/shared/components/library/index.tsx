import { LibrarySong } from './components'

export const Library = (
  {
    // songs,
    // setCurrentSong,
    // audioRef,
    // isPlaying,
    // setSongs,
    // libraryStatus,
  },
) => {
  return (
    // <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
    <div>
      <h2>Library</h2>
      <div className="library-songs">
        {/* {songs.map((song, index) => (
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
        ))} */}
        songs
      </div>
    </div>
  )
}
