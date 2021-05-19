export const getImagen = async () => {
  try {
    const apiKey = 'iXix7BibZFCUkHSieyy5kWOCWjHtuYoH'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    const { data } = await resp.json()

    const { url } = data.images.original

    return url

  } catch ( error ) {
    // console.error( error )
    return 'No existe'
  }
}

