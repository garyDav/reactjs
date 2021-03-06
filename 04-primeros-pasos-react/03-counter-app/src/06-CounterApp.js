import propTypes from 'prop-types'

const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>
    </>
  )
}

CounterApp.propTypes = {
  value: propTypes.number.isRequired
}

export default CounterApp

