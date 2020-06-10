import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";
import s from './Input.module.css';

function Input () {

    let [names, setNames] = useState<Array<string>>([])

    const addName = (nameValue:string) => {
        let newNames = [...names, nameValue]
        setNames (newNames);
    }

    let [input, setInput] = useState<string>("")

    const inputHandler = () => {
        if (input) {
            addName(input);
            alert (`Hello ${input}. How are you?`)
            setInput("");
        } else {alert ("Please fill in your name")}
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setInput(e.currentTarget.value)

    return (
        <div className={s.inputContainer}>
            <input className={s.input} type="text" placeholder={"Enter your name here"}
                   value={input} onChange={onChangeHandler}/>
            <button className={s.button} onClick={inputHandler}>Add</button>
            <span className={s.span}> {`Total amount of names is ${names.length}`} </span>
        </div>
    )
}

export default Input