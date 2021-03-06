import { useState } from 'react'
import propTypes from 'prop-types'

const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState(0)

  // handleAdd
  const handleAdd = _ => {
    // setCounter( counter + 1 )
    setCounter( c => c + 1 )
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: propTypes.number.isRequired
}

export default CounterApp

