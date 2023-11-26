import TodoItem from "./TodoItem"

export default function TodoList(props) {

    const {todos, fetchTodos, editTodo} = props

    const deleteItem = (id) => {
        fetch(`http://localhost:8080/api/todos/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                fetchTodos()
            }
        })
    }
  
    const checkItem = (id) => {
        fetch(`http://localhost:8080/api/todos/${id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                fetchTodos()
            }
        })
        .catch(e => console.log(e))
    }

    const compare = (a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt === b.createdAt) return 0;
        if (a.createdAt < b.createdAt) return 1;
     };

    return (

        <div className='flex flex-col gap-2 text-center'>
            {
                todos.length
                ? todos.sort(compare).map(todo => <TodoItem key={todo.createdAt} 
                                        idx={todo.id}
                                        checkItem={checkItem}
                                        deleteItem={deleteItem}
                                        editTodo={editTodo}
                                        flag={todo.isCompleted}
                              >
                                {todo.name}
                              </TodoItem>)
                : <p className='text-xl'>Нет текущих заданий</p>
            }
        </div>

    )

}