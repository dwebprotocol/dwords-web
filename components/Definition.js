import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { serveDefinition } from './../helpers/serveDefinition'

export default function Definition (props) {
  const [word, setWord] = useState([])
  const [definition, setDefinition] = useState([])

  setWord(props.for)
  setDefinition(await serveDefinition(word))

  return (
    <Typography>
      {definition}
    </Typography>
  )
}