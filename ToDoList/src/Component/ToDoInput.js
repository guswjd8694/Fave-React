import { useState } from "react";


import './scss/ToDoInput.scss'


export default function(props){

    const [title, setTitle] = useState('');

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(title === ''){
            alert('내용을 입력해 주세요^ㅇ^')
        }else{
            props.onCreate(title)
            setTitle("")
        }
    }



    return(
        <form className="input-wrap" onSubmit={onSubmit}>
            <input type="text" value={title} className="input" onChange={onChange}></input>
            <button type="submit" className="input__btn">추가</button>
        </form>
    )
}
