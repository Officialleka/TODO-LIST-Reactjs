import React from 'react'

const Tabs = (props) => {
  const todos = props.todos
  const tabs = ['All', 'Open', 'Completed']
  return (
    <nav className='tab-container'>
      {tabs.map((tab, index) => { 
        let vary;
        let sweet = 0;
        let bitter = 0;
        if(index === 0) {
          vary = todos.length
        } 
        else if(index === 1) {
          todos.map((todo) => {
            if(!todo.complete) {
              bitter ++
              vary = bitter
            } 
          })
        } else if (index === 2) {
          todos.map((todo) => {
            if(todo.complete) {
                sweet ++
                vary = sweet
            }
          })
        }
         return (
        <button onClick={() => {
          props.setSelectedTab(tab)
        }}
        key={index}
       className={'tab-button ' + (tab === props.selectedTab ? ' tab-selected' : '')}>
              <h4>{tab}<span>({vary})</span></h4>
            </button>
           )
      })}

      <hr />
    </nav>
  )
}

export default Tabs