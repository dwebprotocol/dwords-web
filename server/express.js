import React from 'react'
import ReactDOMServer from 'react-router-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import express from 'express'
import { ServerStylesheets, ThemeProvider } from '@material-ui/styles'
import MainRouter from './../MainRouter'
import theme from './../theme'
import Template from './../template'
import devBundle from './devBundle'

const app = express()

app.use('*', (req, res) => {
  const sheets = new ServerStylesheets()
  const context = {}
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </StaticRouter>
    )
  )

  if (context.url) {
    return res.redirect(303, context.url)
  }

  const css = sheets.toString()
  res.status(200).send(Template({
    markup: markup,
    css: css
  })
 )
})

export default app