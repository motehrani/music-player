import Image from 'next/image'

export const LibrarySong = (
  {
    // song,
    // songs,
    // setCurrentSong,
    // audioRef,
    // isPlaying,
    // setSongs,
    // id
  },
) => {
  // const songSelectHandler = async () => {
  //   await setCurrentSong(song)
  //   //Add active state
  //   const newSongs = songs.map(song => {
  //     if (song.id === id) {
  //       return {
  //         ...song,
  //         active: true,
  //       }
  //     } else {
  //       return {
  //         ...song,
  //         active: false,
  //       }
  //     }
  //   })
  //   setSongs(newSongs)
  //   //check if the song is playing
  //   if (isPlaying) audioRef.current.play()
  // }
  return (
    // <div
    //   onClick={songSelectHandler}
    //   className={`library-song ${song.active ? 'selected' : ''}`}
    // >
    <div>
      {/* <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name} </h3>
        <h4>{song.artist} </h4>
      </div> */}
      <Image alt="name" src="/img/cover.jpg" width={100} height={100} />
      <div className="song-description">
        <h3>name</h3>
        <h4>artist</h4>
      </div>
    </div>
  )
}
