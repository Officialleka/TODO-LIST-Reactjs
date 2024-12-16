import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/Todolist"


function App() {
 
  return (
    <div>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
    </div>
  )
}

export default App
