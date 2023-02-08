import React from "react";

const Nav = () => {
  return (
    <nav>
      <h1>Waves</h1>
      <button>
        {/* <button onClick={() => setLibraryStatus(!libraryStatus)}> */}
        Library
        <span className="material-icons">music_note</span>
      </button>
    </nav>
  );
};

export default Nav;
