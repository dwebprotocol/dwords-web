import React from 'react'
import { Router, Switch } from 'react-router-dom'
import Home from './core/Home'
import Dictionary from './core/Dictionary'
import Word from './core/Word'

const MainRouter = () => {
  return ( <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dictionary" component={Dictionary} />
      <Route path="/dictionary/:word" component={Word} />
    </Switch>
  </div>
  )
}

export default MainRouter
