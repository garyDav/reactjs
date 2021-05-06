import propTypes from 'prop-types'

const CounterApp = ({ value }) => {

  // handleAdd
  // const handleAdd = e => {
  //   console.log(e)
  // }
  // Eventos REACT: https://es.reactjs.org/docs/events.html
  const handleAdd = console.log

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>

      <button onClick={ handleAdd }>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: propTypes.number.isRequired
}

export default CounterApp

