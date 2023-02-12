import { FC, Dispatch, SetStateAction, MutableRefObject } from 'react'
// import Image from 'next/image'
// what is the error with using 'next/image' for Image
import Image from 'antd/lib/image'

interface LibrarySongProps {
  song: {
    name: string
    cover: string
    artist: string
    audio: string
    color: string[]
    id: string
    active: boolean
  }
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
  id: string
  audioRef: MutableRefObject<HTMLAudioElement | null>
}

export const LibrarySong: FC<LibrarySongProps> = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  id,
  audioRef,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song)
    //Add active state
    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    })
    setSongs(newSongs)
    //check if the song is playing
    if (isPlaying) audioRef.current?.play()
  }
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      {/* <img alt={song.name} src={song.cover}></img> */}
      <Image alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name} </h3>
        <h4>{song.artist} </h4>
      </div>
    </div>
  )
}
