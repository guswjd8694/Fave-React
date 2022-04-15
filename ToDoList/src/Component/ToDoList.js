import React from "react";
import ToDoItem from './ToDoItem';
import './scss/ToDoList.scss'


export default function(props){

    // console.log(props)

    return(
        <div className="list-wrap">
            <ToDoItem items={props.item} del={props.onDelete}/>
        </div>
    )
}
