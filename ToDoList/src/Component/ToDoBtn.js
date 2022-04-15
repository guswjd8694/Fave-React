import React from "react"
import './scss/ToDoBtn.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench  } from '@fortawesome/free-solid-svg-icons';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck  } from '@fortawesome/free-solid-svg-icons';

export default function(){
    return(
        <>
            <button className="list__btn list__btn--modify"><FontAwesomeIcon icon={faWrench} className="icon__modify" /></button>
            <button className="list__btn list__btn--delete"><FontAwesomeIcon icon={faTrash} className="icon__delete" /></button>
            <button className="list__btn list__btn--finish"><FontAwesomeIcon icon={faCalendarCheck} className="icon__finish" /></button>
        </>
    )
}