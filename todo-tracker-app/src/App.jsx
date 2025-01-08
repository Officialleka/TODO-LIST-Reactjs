import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoList from "./components/Todolist"
import TodoInput from './components/TodoInput'
import './fanta.css'
// import EditCard from "./components/EditCard"

function App() {

const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todotasks')) || [])
const [selectedTab, setSelectedTab] = useState('All')
const [edit, setEdit] = useState(false)

function handleAddTask(newTask, day) {
  const newTodoList = [...todos, {
    input: newTask,
    complete: false,
    date: day
  }]

setTodos(newTodoList)
}

function handleDeleteTask (index) {
   let newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex !== index 
   })
   setTodos(newTodoList)
}

function handleCompletedTask (index) {
    let newTodoList = [...todos]
    let completedtodo = todos[index]
    completedtodo.complete = true
    newTodoList[index] = completedtodo
    setTodos(newTodoList)
}



useEffect(() => {
localStorage.setItem('todotasks', JSON.stringify(todos))


},[todos])

   return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}/>
      <TodoList todos={todos}
       selectedTab={selectedTab}
       setSelectedTab={setSelectedTab}
       deleteTask = {handleDeleteTask}
       completeTask ={handleCompletedTask}
       edit={edit}
       setEdit={setEdit}/>
      <TodoInput addTask={
        handleAddTask
      }/> 
    </>
  )
}

export default App
