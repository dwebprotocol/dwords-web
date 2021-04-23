import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Title from './../components/Title'
import Search from './../components/Search'
import Footer from './../components/Footer'

export default function Dictionary () {
  return (
      <>
    <Title title="dWords" />
    <Typography variant="h3">
      Try out the magical distributed dictionary...
    </Typography>
    <Card>
      <Search />
    </Card>
    <Footer />
    </>
  )
}