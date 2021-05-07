import { useState } from 'react'
import propTypes from 'prop-types'

const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value )

  // handleAdd
  const handleAdd = _ => setCounter( counter + 1 )

  // handleSub
  const handleSub = _ => setCounter( counter -1 )

  // handleReset
  const handleReset = _ => setCounter( value )

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleSub }>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: propTypes.number.isRequired
}
CounterApp.defaultProps = {
  value: 10
}

export default CounterApp

