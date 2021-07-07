import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import testUtils from 'react-dom/test-utils'
import CounterApp from '../CounterApp'
/***
  #Tarea
    1. Crear las siguientes pruebas para el <CounterApp />
      * Debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot), y sus valores por defecto
      * Debe de mostrar el valor por defecto de 100
        * Usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
***/
describe('Pruebas de mi componente <CounterApp />', () => {
  // let wrapper = shallow( <CounterApp /> )
  let wrapper

  beforeEach( () => {
    wrapper = shallow( <CounterApp /> )
  })

  test('Debe de mostrar <CounterApp /> correctamente, y sus valores por defecto', () => {

    expect( wrapper ).toMatchSnapshot()

  })

  test('Debe de mostrar el valor por defecto de 100', () => {
    const wrapper = shallow( <CounterApp value={ 100 } /> )

    const counterText = wrapper.find('h2').text().trim()
    expect( counterText ).toBe('100')
  })

  test('Debe de incrementar con el botón +1', () => {
    wrapper.find('button').at(0).simulate('click')

    const counterText = wrapper.find('h2').text().trim()
    expect( counterText ).toBe('11')
  })

  test('Debe de decrementar con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click')

    const counterText = wrapper.find('h2').text().trim()
    expect( counterText ).toBe('9')
  })

  test('Debe de colocar el valor por defecto con el btn reset', () => {
    const wrapper = shallow( <CounterApp value={105} /> )
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    const counterText = wrapper.find('h2').text().trim()

    expect( counterText ).toBe('105')
  })

})
