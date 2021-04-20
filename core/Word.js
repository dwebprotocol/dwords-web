import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Definition from './../components/Definition'
import Footer from './../components/Footer'
import Menu from './../components/Menu'
import Search from './../components/Search'
import Title from './../components/Title'

export default function Word () {
  let { word } = useParams(); //destructure word parameter from the URL
  return (
      <>
    <Menu />
    <Card>
      <Title title={word} />
      <Definition for={word} />
    </Card>
    <Link to="/">
      <Button color="primary" autoFocus="autoFocus" variant="contained">
        Search for another word!
      </Button>
    </Link>
    <Footer />
    </>
  )
}