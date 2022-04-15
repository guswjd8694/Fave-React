import { useState } from "react";
import Header from './Header';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import './scss/ToDoWrapper.scss'



export default function(){

    const [nextId, setnextId] = useState(1)
    const [todoitem, setTodoitem] = useState([])
    const onCreate = (_title) => {
        const newItem = {id: nextId, title: _title}
        const newItems = [...todoitem,newItem]
        
        setTodoitem(newItems);
    }

    return(
        <div className="container">
            <Header />
            <ToDoInput onCreate={onCreate} />
            <ToDoList item={todoitem} />
        </div>
    )
}

