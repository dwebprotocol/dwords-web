const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    dictionaryURL: process.env.DICTIONARY_URL || 'dweb://dictionary.dwebx.net'
  }
  
  export default config