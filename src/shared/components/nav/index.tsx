import { Dispatch, FC, SetStateAction } from 'react'

import Button from 'antd/lib/button'

interface NavProps {
  libraryStatus: boolean
  setLibraryStatus: Dispatch<SetStateAction<boolean>>
  // setLibraryStatus: (open: boolean) => void
}
// saw the answer in:
// https://stackoverflow.com/questions/67039650/this-express-is-not-callable-type-boolean-has-no-call-signatures

export const Nav: FC<NavProps> = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <Button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <span className="material-icons">music_note</span>
      </Button>
    </nav>
  )
}
