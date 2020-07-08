import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import MyInput from "./common/myInput/MyInput";
import MyButton from "./common/myButton/MyButton";
import s from "./MyComponents.module.css";
import {v1} from "uuid";
import MyCheckbox from "./common/myCheckbox/MyCheckbox";

const MyComponents = () => {
    let [names, setNames] = useState<Array<{ id: string, name: string }>>([])
    let [name, setName] = useState< string >("")


    const addName = (nameValue: string) => {
        alert(`Hello ${nameValue}`)
        let newName = {id: v1(), name: nameValue}
        let newNames = [...names, newName]
        setNames(newNames);
        setName('');
    }
    const buttonClick = () => {
        alert(`Hello ${name}`)
        let newName = {id: v1(), name: name}
        let newNames = [...names, newName]
        setNames(newNames);
        setName("")
    }
    const setNameInput = (title: string) => {
        setName(title)
    }

debugger
    return (
        <div className={s.inputContainer}>
            <MyInput  addItem={addName} onChangeTitle={setNameInput} value={name}/>
            <MyButton onClick={buttonClick} value={"Add"} isStandard={true}/>
            <MyCheckbox id={"1"} label={""}/>
            <span className={s.span}> {`Total amount of names is ${names.length}`} </span>
        </div>
    )
}
export default MyComponents