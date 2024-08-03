import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodos, deleteTodos } from './redux/slices/todoSlice';
function App() {
  const [input, setInput] = useState("")
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addTodos(input));
    setInput("");
  }

  const handleDelete = (index) => {
    dispatch(deleteTodos(index))
  }
  return (
    <>
      <div className='main_container'>
        <h1>Redux Todo App</h1>
        <div className='container'>
          <TextField value={input} onChange={(e) => setInput(e.target.value)} id="outlined-basic" label="Input Items" variant="outlined" />
          <Button onClick={handleAdd} variant="contained" style={{ padding: 15, paddingRight: 24, paddingLeft: 24 }}>
            ADD
          </Button>
        </div>
        <div>
          {
            todos && todos.map((item, index) => {
              return (
                <div className='content'  key={index}>
                  <div className='content_child'>
                    <p>
                      {item}
                    </p>
                    <Button v onClick={() => handleDelete(index)} variant="contained">
                      DELETE
                    </Button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
