import React from 'react'
import ReactDOMServer from 'react-router-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import MainRouter from './../MainRouter'
import { ServerStylesheets, ThemeProvider } from '@material-ui/styles'
import theme from './../theme.js'
import Template from './../template'
import devBundle from './devBundle'

const app = express()
const CURRENT_WORKING_DIR = process.cwd()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

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
  return res.status(200).send(Template({
    markup: markup,
    css: css
  }))
})

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

export default app