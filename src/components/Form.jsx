import React from 'react';
import {GrFormAdd} from "react-icons/all";

/*This component contains input and submit actions*/
const Form = ({ inputText, setInputText, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if(inputText === ''){
            console.log('anan')
        }else{
            setTodos([...todos, {id: Math.floor(Math.random() * 10), text: inputText, completed: false}])
            setInputText('')
        }

    }

    return (
        <div className="flex rounded-lg">
            <input className="w-96 border-b-2 border-gray-200 outline-none rounded-sm focus:border-b-indigo-500 focus:duration-300 indent-2"
                   type="text"
                   placeholder="Enter task"
                   value={inputText}
                   onChange={inputTextHandler}
                   onKeyPress={e => e.key === 'Enter' ? submitTodoHandler(e) : ''}/>
            <div className="p-2">
                <button className="text-sm bg-indigo-500 rounded-sm p-1" onClick={submitTodoHandler} type="submit" value="Add">
                    Add
                </button>
            </div>

        </div>
    )
}

export default Form