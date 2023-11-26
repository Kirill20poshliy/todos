import { useEffect, useState } from "react"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import Modal from "./components/Modal"

export default function App() {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentId, setCurrentId] = useState(0)

  const fetchTodos = () => {
    fetch('http://localhost:8080/api/todos')
    .then(res => res.json())
    .then(data => {
      setTodos(data)
      setLoading(false)
    })
    .catch(e => console.log(e))
  }

  const editTodo = (title, id) => {
    setCurrentTitle(title)
    setCurrentId(id)
    setModal(modal ? false : true)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (

    <div className='flex flex-col gap-2 relative'>
      <AddTodo fetchTodos={fetchTodos}/>
      <div className='flex flex-col gap-2 px-6 pt-24 text-center'>
        {
          loading 
          ? <p className='text-xl'>Загрузка...</p>
          : <TodoList
              fetchTodos={fetchTodos}
              todos={todos}
              editTodo={editTodo} 
            />
        }
      </div>
      {
        modal
        ? <Modal editTodo={editTodo} 
                  title={currentTitle} 
                  idx={currentId} 
                  setModal={setModal} 
                  fetchTodos={fetchTodos}        
          />
        : ''
      }
    </div>
  )


}

