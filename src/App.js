import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Actions from './redux/actions/ActionsIndex';

const App = () => {
  const [listName, setListName] = useState('')
  const todoList = useSelector(state => state.listReducers.list)

  const dispatch = useDispatch();

  return (
    <div className="App">
      input: <input value={listName} onChange={(e) => setListName(e.target.value)}></input>
      <button type="button" onClick={() => dispatch(Actions.listActions.add_item({
        item: {
          name: listName,
          data: 'data_' + listName
        }
      }))}>ADD</button>
      {JSON.stringify(todoList)}
      <ul>
        {todoList.map(item => <li key={item.name}>{item.name}_{item.data}</li>)}
      </ul>
    </div>
  );
}

export default App;
