import { useState } from 'react'

export default function AddTodo(props) {

    const [title, setTitle] = useState('')
    const {fetchTodos} = props

    
    const createTodo = () => {
        if (!title) {
            alert('Нельзя создать пустое задние!')
            return
        } 
        fetch('http://localhost:8080/api/todos', {
            method: 'POST',
            body: JSON.stringify({name: title}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                setTitle('')
                fetchTodos()
            }
        })
    }
    
    const keyHandler = (key) => {
        if (key === 'Enter') {
            createTodo()
        }
    }

    return (

        <div className='flex gap-2 p-6 fixed bg-white w-full z-40'>
            <input type='text' 
                    name='title'
                    onKeyDown={(e) => keyHandler(e.key)} 
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    value={title}
                    className={`grow p-2 
                                border-4 
                                border-yellow-200 
                                focus:border-yellow-400
                                rounded-2xl
                                outline-none`}
            />
            <button onClick={createTodo}
                    className='bg-yellow-300 
                                p-3 
                                rounded-2xl
                                flex
                                justify-center
                                items-center
                                font-medium
                                active:bg-yellow-400'
            >
                Добавить
            </button>
        </div>

    )

}