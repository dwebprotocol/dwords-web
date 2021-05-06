import DWebTree from 'dwebtree'
import { DDatabase } from './sdk'
import config from './../config/config'

const DICTIONARY_KEY = await resolveName(config.dictionaryURL)

const base = new DDatabase("323cdd628d3f0b1aeb0012c4a75bcae35291486f7ff69d3edd6d66fdfc52919b")
await base.ready()
await base.get()

export const dtree = new DWebTree(base, {
  keyEncoding: 'utf-8',
  valueEncoding: 'utf-8'
})