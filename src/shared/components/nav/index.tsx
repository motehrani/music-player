import React from 'react'

// const Nav = ({ libraryStatus, setLibraryStatus }) => {
export const Nav = () => {
  return (
    <nav>
      <h1>Waves</h1>
      {/* <button onClick={() => setLibraryStatus(!libraryStatus)}> */}
      <button>
        Library
        <span className="material-icons">music_note</span>
      </button>
    </nav>
  )
}
