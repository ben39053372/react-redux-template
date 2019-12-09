
const ADD_ITEM = 'ADD_ITEM';

const initState = {
  list: [{name: 'one',data: 'data-one'},{name: 'two', data: 'data-two'}]
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        list: state.list.concat(action.payload.item)
      };
    default:
      return state;
  }
}

export default reducer