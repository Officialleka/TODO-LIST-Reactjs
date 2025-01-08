import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
   const todos = props.todos
   const handleDelete = props.deleteTask
   const completeTask = props.completeTask
   const edit = props.edit
   const setEdit = props.setEdit
   const filteredTodosList =
   props.selectedTab === 'All'
    ?
   todos 
   :  props.selectedTab === 'Completed'
    ?
   todos.filter((val) => {
    return val.complete
   }) :
    todos.filter((val) => {
    return !val.complete
   })




  return (
    <>
    {filteredTodosList.map((todo, index) => {
    return  (
      <TodoCard key={index}
      job={todo.input}
      date={todo.date}
      finished={todo.complete}
      handleDelete={handleDelete}
      completeTask={completeTask}
      edit={edit}
      setEdit={setEdit}
      index={todos.findIndex(val => val.input === todo.input) }
      />
    )

      })} 
    </>
  )
}

export default TodoList