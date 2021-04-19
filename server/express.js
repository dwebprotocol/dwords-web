import Template from './../template'
import devBundle from './devBundle'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
const CURRENT_WORKING_DIR = process.cwd()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/', (req, res) => {
  res.status(200).send(Template())
})
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

export default app