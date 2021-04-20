import React from 'react'
import Card from '@material-ui/core/Card'
import Title from './../components/Title'
import Search from './../components/Search'
import Footer from './../components/Footer'

export default function Home () {
  return (
      <>
    <Title title="dWords" />
    <Card>
      <Search />
    </Card>
    <Footer />
    </>
  )
}