import { dtree } from '../util/getData.js'

export async function getDefinition (word) {
  return new Promise(async (resolve, reject) => {
    let { value } = await dtree.get(word)
    if (value === "null") {
      reject (new Error("The word was not found"))
    }
    else {
      resolve(value)
    }
  })
}