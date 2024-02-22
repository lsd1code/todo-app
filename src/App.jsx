import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import Todos from "./components/Todos"
import { useTodoContext } from "./context/AppWrapper"

const App = () => {
  const { todos, addTodo, completeTodo, removeCompletedTodos} = useTodoContext() 

  return (
    <div className="min-h-screen dark:bg-very-dark-blue dark:text-very-light-gray bg-very-light-gray text-very-dark-blue">
      <div className="max-w-[520px] mx-auto">
        <Header />
        <AddTodo addTodo={addTodo}/>
        <Todos 
          todos={todos}
          completeTodo={completeTodo}
          removeCompletedTodos={removeCompletedTodos}
        />
      </div>
    </div>
  )
}

export default App