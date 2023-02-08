import Image from 'next/image'

// const Song = ({ currentSong }) => {
export const Song = () => {
  return (
    <div className="song-container">
      {/* <img alt={currentSong.name} src={currentSong.cover}></img>
      <h2>{currentSong.name} </h2>
      <h3>{currentSong.artist} </h3> */}
      <Image alt="name" src="cover"></Image>
      <h2>name</h2>
      <h3>artist </h3>
    </div>
  )
}
