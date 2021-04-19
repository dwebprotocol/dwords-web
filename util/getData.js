import DWebTree from 'dwebtree'
import { DDatabase } from './sdk'
import config from './../config/config'

const DICTIONARY_KEY = await resolveName(config.dictionaryURL)

const base = new DDatabase(DICTIONARY_KEY)
await base.ready()
await base.get()

export const dtree = new DWebTree(base, {
  keyEncoding: 'utf-8',
  valueEncoding: 'utf-8'
})