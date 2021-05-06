

// const getImagenPromesa = _ => new Promise( resolve => resolve('https://asdfasdfasd.com') )
// getImagenPromesa().then( console.log )

const getImagen = async _ => {
  try {
    const apiKey = 'iXix7BibZFCUkHSieyy5kWOCWjHtuYoH'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    const { data } = await resp.json()

    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url

    document.body.append( img )

  } catch ( error ) {
    console.error( error )
  }
}

getImagen()


