import { Dispatch, FC, SetStateAction } from 'react'
import { useTheme } from 'next-themes'

import Button from 'antd/lib/button'

interface NavProps {
  libraryStatus: boolean
  setLibraryStatus: Dispatch<SetStateAction<boolean>>
  // setLibraryStatus: (open: boolean) => void
}
// saw the answer in:
// https://stackoverflow.com/questions/67039650/this-express-is-not-callable-type-boolean-has-no-call-signatures

export const Nav: FC<NavProps> = ({ libraryStatus, setLibraryStatus }) => {
  const { theme, setTheme } = useTheme()
  return (
    <nav>
      <div className="wave">
        <h1>Waves</h1>
        <Button onClick={() => setTheme('light')}>
          <span className="material-icons">light_mode</span>
        </Button>
        <Button onClick={() => setTheme('dark')}>
          <span className="material-icons">bedtime</span>
        </Button>
      </div>
      <Button onClick={() => setLibraryStatus(!libraryStatus)}>
        <h2>Library</h2>
        <span className="material-icons">music_note</span>
      </Button>
    </nav>
  )
}
