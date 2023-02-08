import { FC } from 'react'

interface NavProps {
  libraryStatus: boolean
  setLibraryStatus: (open: boolean) => void
}
// saw the answer in:
// https://stackoverflow.com/questions/67039650/this-express-is-not-callable-type-boolean-has-no-call-signatures

export const Nav: FC<NavProps> = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <span className="material-icons">music_note</span>
      </button>
    </nav>
  )
}
