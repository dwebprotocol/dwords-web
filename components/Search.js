import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Search () {
  const [word, setWord] = useState([])

  return (
      <div>
          <TextField id="search" label="Search for a word" type="search" onKeyDown={enterKey} onChange={handleChange} />
          <Button raised onClick={search}>Go</Button>

      </div>
  )
}

const enterKey = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault()
    search()
  }
}

const handleChange = (event) => {
  setWord(event.target.value)
}

function search () {
  if (word) {
    return (<Redirect to={'/dictionary/' + word}/>)
  }
}