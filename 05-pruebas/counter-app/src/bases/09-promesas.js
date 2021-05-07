import getHeroeById from './bases/08-imp-exp'

/*
const promesa = new Promise( (resolve, reject) => {
  setTimeout(_ => {
    // Tarea
    // importen el
    const heroe = getHeroeById(2)
    // console.log( heroe )
    resolve( heroe )
    // reject( 'No se puede encontrar el héroe' )
  }, 2000)
})

promesa.then( heroe => 
  console.log('Heroe', heroe)
)
.catch( err => console.warn( err ) )
*/

const getHeroeByIdAsync = id => {
  return new Promise( (resolve, reject) => {
    setTimeout(_ => {
      const heroe = getHeroeById(id)
      if ( heroe ) {
        resolve( heroe )
      } else {
        reject( 'No se pudo encontrar el héroe' )
      }
    }, 2000)
  })
}

getHeroeByIdAsync( 10 )
  .then( console.log )
  .catch( console.warn )


