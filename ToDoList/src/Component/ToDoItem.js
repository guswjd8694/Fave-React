import React from "react"
import './scss/ToDoItem.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench  } from '@fortawesome/free-solid-svg-icons';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck  } from '@fortawesome/free-solid-svg-icons';
import './scss/ToDoBtn.scss'




export default function({items}){
    const itemList = items.map((item, index) => {
        return(
            <li className="list__item" key={index}>
                <span className="list__title">{item.title}</span>
                <button className="list__btn list__btn--modify"><FontAwesomeIcon icon={faWrench} className="icon__modify" /></button>
                <button className="list__btn list__btn--delete"><FontAwesomeIcon icon={faTrash} className="icon__delete" /></button>
                <button className="list__btn list__btn--finish"><FontAwesomeIcon icon={faCalendarCheck} className="icon__finish" /></button>
            </li>
        )
    }
)
        console.log(itemList)
    
        

    return(
        <ul className="list">
            {itemList}
        </ul>
    )
    
}
