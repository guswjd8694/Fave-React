import { useState } from "react";
import Header from './Header';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import './scss/ToDoWrapper.scss'



export default function(){

    const [nextId, setnextId] = useState(Math.random())
    const [todoitem, setTodoitem] = useState([])

    const onCreate = (_title) => {
        const newItem = {id: nextId, title: _title, checked: false, delete: false}
        const newItems = [...todoitem,newItem]
        
        setTodoitem(newItems);
    }

    const onDelete = (_id) => {
        setTodoitem(todoitem.filter(todo => todo.id !== _id))
    }

    return(
        <div className="container">
            <Header />
            <ToDoInput onCreate={onCreate} />
            <ToDoList onDelete={onDelete} item={todoitem} />
        </div>
    )
}

