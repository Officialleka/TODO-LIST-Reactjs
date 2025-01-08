import React from 'react'

const Header = (props) => {
  const { todos } = props
   const todolength = todos.length

   let plural;
   plural = todolength !== 1 ? 'Tasks' : 'Task'
  return (
    <header>
      <h1 className='text-gradient'>You have {todolength} Scheduled {plural}.</h1>
     </header>
  )
}

export default Header