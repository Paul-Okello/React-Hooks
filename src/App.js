import React, { useState } from 'react'
import  './App.css'


function Todo({todo,index,completeTodo,removeTodo}){
  return(
    <div className="todo" >
      <p style={{ textDecoration: todo.isCompleted ? 'line-through': '' }}>
      {todo.text}
      </p> 
      <button onClick={() => completeTodo(index)}>Done</button>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  )
}

function TodoForm({addTodo}){
  const [value,setValue] = useState('')
  const handleSubmit = e =>{
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return (
   <form action="" onSubmit={handleSubmit}>
      <input 
      className="input"
      type="text"
      value= {value}
      placeholder = "Add new event..."
      onChange = { e => setValue(e.target.value)} />
   </form>
  )
}
function App() {
    const [todos, setTodos] = useState([{
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'Meet friend for Lunch',
            isCompleted: false
        },
        {
            text: 'Build really cool todo app',
            isCompleted: false
        }
    ])
const addTodo = text =>{
  const NewTodos = [...todos,{text}]
  setTodos(NewTodos)
}
const completeTodo = index => {
  const newTodos = [...todos]
  newTodos[index].isCompleted = true
  setTodos(newTodos)
}
const removeTodo = index =>{
  const newTodos = [...todos]
  newTodos.splice(index,1)
  setTodos(newTodos)
}
    return (
       < div className = "app" >
          <div className="todo-list">
          {todos.map((todo,index) => (
            <Todo key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}/>

          ))}
          <TodoForm addTodo={addTodo} />
          </div>
        </div>

    )
}
export default App