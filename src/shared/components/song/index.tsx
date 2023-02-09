import { FC } from 'react'
import { Image } from 'antd'

interface SongProps {
  currentSong: {
    name: string
    cover: string
    artist: string
    audio: string
    color: string[]
    id: string
    active: boolean
  }
}

export const Song: FC<SongProps> = ({ currentSong }) => {
  return (
    <div className="song-container">
      <Image
        alt={currentSong.name}
        src={currentSong.cover}
        // src="/img/cover.jpg"
        width={100}
        height={100}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  )
}
