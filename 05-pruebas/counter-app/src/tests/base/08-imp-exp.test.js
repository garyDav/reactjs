import { getHeroById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Héroes', () => {

  test('Debe de retornar un héroe por id', () => {
    
    const id = 1
    const hero = getHeroById( id )

    const heroData = heroes.find( h => h.id === id )
    expect( hero ).toEqual( heroData )

  })

  test('Debe de retornar undefined si héroe no existe', () => {
    
    const id = 10
    const hero = getHeroById( id )

    expect( hero ).toEqual( undefined )

  })

  test('Debe de retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC'
    const heroes = getHeroesByOwner( owner )

    const heroesData = heroes.filter( h => h.owner === owner )

    expect( heroes ).toEqual( heroesData )

  })

  test('Debe de retornar un arreglo con los héroes de Marvel', () => {

    const owner = 'Marvel'
    const heroes = getHeroesByOwner( owner )
    const [ {name: nHero1}, {name: nHero2} ] = heroes

    const heroesData = heroes.filter( h => h.owner === owner )
    const [ {name: nHeroD1}, {name: nHeroD2} ] = heroesData

    expect( heroes.length ).toBe( heroesData.length )

    expect( nHero1 ).toBe( nHeroD1 )
    expect( nHero2 ).toBe( nHeroD2 )

  })

})
