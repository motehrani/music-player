import {
  useEffect,
  MutableRefObject,
  Dispatch,
  FC,
  SetStateAction,
  ChangeEvent,
} from 'react'

interface PlayerProps {
  songInfo: {
    currentTime: number
    duration: number
    animationPercentage: number
  }
  setSongInfo: Dispatch<
    SetStateAction<{
      currentTime: number
      duration: number
      animationPercentage: number
    }>
  >
  currentSong: {
    name: string
    cover: string
    artist: string
    audio: string
    color: string[]
    id: string
    active: boolean
  }
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
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  audioRef: MutableRefObject<HTMLAudioElement | null>
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
}

export const Player: FC<PlayerProps> = ({
  songInfo,
  setSongInfo,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  setSongs,
}) => {
  useEffect(() => {
    const newSongs = songs.map(song => {
      if (song.id === currentSong.id) {
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
  }, [currentSong])
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  const getTime = (time: number) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }
  const dragHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = +e.target.value
    }
    setSongInfo({ ...songInfo, currentTime: +e.target.value })
  }

  const skipTrackHandler = async (direction: 'skip-back' | 'skip-forward') => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id)
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        if (isPlaying) audioRef.current?.play()
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      }
    }
    if (isPlaying) audioRef.current?.play()
  }
  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <span
          className="material-icons skip-back"
          onClick={() => skipTrackHandler('skip-back')}
        >
          skip_previous
        </span>
        <span className="material-icons play" onClick={playSongHandler}>
          {isPlaying ? 'pause' : 'play_arrow'}
        </span>
        <span
          className="material-icons skip-forward"
          onClick={() => skipTrackHandler('skip-forward')}
        >
          skip_next
        </span>
      </div>
    </div>
  )
}
