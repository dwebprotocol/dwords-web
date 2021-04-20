import { getDefinition } from './getDefinition'

export async function serveDefinition (word) {
  await getDefinition(word)
    .then((definition) =>{ return definition})
    .catch((error) => {return error})
}