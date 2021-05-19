// import heroes, { owners } from '../data/heroes'
import heroes from '../data/heroes'

export const getHeroById = (id) => heroes.find( hero => hero.id === id );


// console.log( getHeroById(2) );

export const getHeroesByOwner = owner => heroes.filter( heroe => heroe.owner === owner )

// console.log( getHeroesByOwner('DC') )
// console.log( owners );

export default getHeroById

