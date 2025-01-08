import React, { useState } from 'react'

const TodoInput = (props) => {

  const [inputValue, setInputValue] = useState('')
  const [dateValue, setDateValue] = useState([])

  return (
   <div className='input-container'>
     <input type="text"
      placeholder='Add task'
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value)
      }}
      // onKeyDown={(event) => {
      //  if(event.key === 'Enter') {
      //   props.addTask(inputValue)
      //   setInputValue('')
      //  }
      // }}
      />

      <input type="date" 
      placeholder='Add date'
      value={dateValue}
      onChange={(event) => {
        const {value} = event.target
        setDateValue(value)
      }}/>
      <button onClick={() => {
        if(!inputValue) {
          return 
        }
        props.addTask(inputValue, dateValue)
        setInputValue('')
        setDateValue('')
      }}>
      <i className="fa-solid fa-plus"></i>
      </button>
   </div>
  )
}

export default TodoInput