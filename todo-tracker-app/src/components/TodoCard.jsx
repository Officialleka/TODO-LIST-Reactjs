import React from 'react'
import EditCard from './EditCard'

const TodoCard = (props) => {
  console.log(props)
  return (
    <div className='card todo-item'>
      <div className='todo-bar'>
        <div className='task-bar'>
        <p>{props.job}</p>
        </div>
      <p>{props.date}</p>
      </div>
      <div className='todo-buttons'>
        <button onClick={() => {
          props.completeTask(props.index)
        }} 
        disabled={props.finished}>
           <h6>Done</h6>
        </button>
        <button onClick={
          () => {
            props.handleDelete(props.index)
          }
        }>
           <h6>Delete</h6>
        </button>
        <button onClick={() => {
        }}>
           <h6>Edit</h6>
        </button>
        {props.edit && <EditCard 
        edit={props.edit}
        setEdit={props.setEdit}
        index={props.index}/>
        }
      </div>
    </div>
  )
}

export default TodoCard