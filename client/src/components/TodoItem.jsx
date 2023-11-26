import { useState } from "react"
import { CgCheckO } from "react-icons/cg"
import { CgClose } from "react-icons/cg"
import { CgPen } from "react-icons/cg"

export default function TodoItem(props) {

    const {children, idx, flag, deleteItem, checkItem, editTodo} = props

    const [check, setCheck] = useState(flag)

    const checkHandler = () => {
        setCheck(check ? false : true)
        checkItem(idx)
    }

    return (

        <div className={`flex 
                        justify-between 
                        p-3 
                        bg-yellow-300 
                        rounded-2xl
                        ${check ? 'opacity-50' : ''}`}
        >
            <div className='flex gap-2 items-center'>
                <button onClick={checkHandler}>
                    <CgCheckO size={20}/>
                </button>
                <h1 className={`text-xl 
                                font-medium 
                                ${check ? 'line-through' : ''}`}
                >
                    {children}
                </h1>
            </div>
            <div className='flex items-center gap-4'>
                <button onClick={() => editTodo(children, idx)}><CgPen size={20}/></button>
                <button 
                    onClick={() => deleteItem(idx)}
                    className='flex items-center gap-2 hover:underline'
                >
                    <p>Удалить</p> 
                    <CgClose size={20}/>
                </button>
            </div>
        </div>

    )

}