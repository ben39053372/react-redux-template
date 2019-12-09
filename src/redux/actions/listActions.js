const add_item = payload => {
  console.log(payload)
  return {
    type: 'ADD_ITEM',
    payload: payload
  }
}

export default {
  add_item
}