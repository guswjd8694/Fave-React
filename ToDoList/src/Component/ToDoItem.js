import React from "react"
import './scss/ToDoItem.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench  } from '@fortawesome/free-solid-svg-icons';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck  } from '@fortawesome/free-solid-svg-icons';
import './scss/ToDoBtn.scss'




export default function({items, del}){

    const onClickModifyBtn = () => {
        console.log('modify')
    }

    const onClickDeleteBtn = () => {
        console.log('delete')
        del()
    }

    const onClickFinishBtn = () => {
        console.log('finish')
    }

    const itemList = items.map((item, index) => {

        console.log('id가 1로 고정돼있다', item)

        return(
            <li className="list__item" key={index}>
                <span className="list__title">{item.title}</span>
                <button className="list__btn modify" onClick={onClickModifyBtn}><FontAwesomeIcon icon={faWrench} className="icon__modify" /></button>
                <button className="list__btn delete" onClick={onClickDeleteBtn}><FontAwesomeIcon icon={faTrash} className="icon__delete" /></button>
                <button className="list__btn finish" onClick={onClickFinishBtn}><FontAwesomeIcon icon={faCalendarCheck} className="icon__finish" /></button>
            </li>
        )
    }
)
        

    return(
        <ul className="list">
            {itemList}
        </ul>
    )
    
}
