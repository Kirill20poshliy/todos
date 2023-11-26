import { useState } from 'react'
import { CgClose } from "react-icons/cg"

export default function Modal(props) {

    const {editTodo, title, idx, setModal, fetchTodos} = props

    const [value, setValue] = useState(title)

    const editHandler = () => {
        fetch('http://localhost:8080/api/todos', {
            method: 'PUT',
            body: JSON.stringify({name: value, id: idx}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                setModal(false)
                fetchTodos()
            }
        })
        .catch(e => console.log(e))
    }

    const keyHandler = (key) => {
        if (key === 'Enter') {
            editHandler()
        }
    }

    return (

        <div className='w-full h-screen fixed z-50'>
            <div className='absolute bg-black w-full h-full opacity-50'></div>
            <div className='absolute 
                            bg-white 
                            rounded-2xl 
                            p-6 
                            translate-x-[-50%] 
                            translate-y-[-50%] 
                            top-[50%] 
                            left-[50%]
                            flex
                            gap-2
                            w-[50%]'
            >
                <input className={`grow p-2 
                                border-4 
                                border-yellow-200 
                                focus:border-yellow-400
                                rounded-2xl
                                outline-none`} 
                        type='text' 
                        id='title'
                        onChange={e => setValue(e.currentTarget.value)}
                        value={value} 
                        onKeyDown={e => keyHandler(e.key)}       
                />
                <button onClick={editHandler}
                        className='bg-yellow-300 
                                    p-3 
                                    rounded-2xl
                                    flex
                                    justify-center
                                    items-center
                                    font-medium
                                    active:bg-yellow-400'
                >
                    Изменить
                </button>
                <button onClick={editTodo}><CgClose size={20}/></button>
            </div>
        </div>

    )

}