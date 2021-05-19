import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe de retornar: Hola Gary!', () => {
    const nombre = 'Gary'
    const saludo = getSaludo(nombre)
    expect( saludo ).toBe( 'Hola ' + nombre + '!' )
  })

  test('getSaludo sin argumento debe de retornar: Hola Carlos', () => {
    const nombre = 'Carlos'
    const saludo = getSaludo()
    expect( saludo ).toBe( 'Hola ' + nombre + '!')
  })
})

