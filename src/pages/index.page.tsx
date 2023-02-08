import { useState, useRef } from 'react'

import data from 'public/api/data'
import { Nav } from '@src/shared/components/nav'
import { Song } from '@src/shared/components/song'
import { Player } from '@src/shared/components/player'
import { Library } from '@src/shared/components/library'

const Home = () => {
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
