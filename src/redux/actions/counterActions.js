const increment = payload => {
  return {
    type: 'INCREMENT',
    payload
  }
}

const decrement = payload => {
  return {
    type: 'DECREMENT',
    payload
  }
}

export default {
  increment,
  decrement
}