import { useState, useRef } from 'react'

import data from '@src/pages/data'
import { Nav } from '@src/shared/components/nav'
import { Song } from '@src/shared/components/song'
import { Player } from '@src/shared/components/player'
import { Library } from '@src/shared/components/library'

const Home = () => {
  // Ref
  const audioRef = useRef(null)
  // state
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: '',
    duration: '',
    animationPercentage: 0,
  })
  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    //Calculate Percentage
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    })
  }
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) audioRef.current.play()
  }
  return (
    <div>
      {/* <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} /> */}
      <Nav />
      {/* <Song currentSong={currentSong} /> */}
      <Song />
      {/* <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      /> */}
      <Player />
      {/* <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      /> */}
      <Library />
      {/* <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio> */}
      <audio src=""></audio>
    </div>
  )
}

export default Home

// import { Button } from 'antd'
// // import { useState } from 'react'
// // import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil'
// // import { testAtom } from '@src/shared/atoms/test.atom'
// // const [state, setState] = useState()
// // const [state, setState] = useSetRecoilState(testAtom)
