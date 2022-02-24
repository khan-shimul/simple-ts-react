import React, { useCallback, useReducer, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './compo/Lists';

// const Box: React.FC<{ title: string }> = ({ title }) => {
//   return <div></div>
// }

function App() {

  interface Todo {
    id: number,
    text: string
  };

  type ActionType = { type: 'Add', text: string } | { type: 'Remove', id: number };

  const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
      case 'Add':
        return [
          ...state,
          {
            id: state.length,
            text: action.text
          }
        ];
      case 'Remove':
        return state.filter(({ id }) => id !== action.id);

    }
  }
  const [todos, dispatch] = useReducer(reducer, []);

  // [{}, {}, {}]

  const newTodoRef = useRef<HTMLInputElement>(null);
  // useCallback
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'Add',
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = '';
    }
  }, []);

  return (
    <div className="App">
      {/* <Box title='hello world'>in compo kichu ekta</Box>
      <Lists /> */}

      <input type="text" ref={newTodoRef} />
      <button onClick={onAddTodo}>Add</button>

      {
        todos.map((todo) => (
          <div key={todo.id}>{todo.text} <button onClick={() => dispatch({ type: 'Remove', id: todo.id })}>X</button></div>
        ))
      }
    </div>
  );
}

export default App;
