import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import MyInput from "./common/myInput/MyInput";
import MyButton from "./common/myButton/MyButton";
import s from "./MyComponents.module.css";
import {v1} from "uuid";
import MyCheckbox from "./common/myCheckbox/MyCheckbox";

const MyComponents = () => {
    let [names, setNames] = useState<Array<{id: string, name: string}>>([])
    let [input, setInput] = useState<string>("")
    let [error, setError] = useState<string>("")

    const addName = (nameValue:string) => {
        let newName = {id: v1(), name: nameValue}
        let newNames = [...names, newName]
        setNames (newNames);
    }
    const inputHandler = () => {
        if (input) {
            addName(input);
            alert (`Hello ${input}. How are you?`)
            setInput("");
        } else {
            setError("error")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
        setError("")
    }
    const onKeyPressHandler = (e:KeyboardEvent) => { if (e.charCode === 13) {inputHandler()} }

    return (
        <div className={s.inputContainer}>
            <MyInput placeholder={!error? "Enter your name here" : "This field is required"}
                     value={input}
                     error={error}
                     onChange={onChangeHandler}
                     onKeyPress={onKeyPressHandler}/>

            <MyButton onClick={inputHandler} value={"Add"} isStandard={true}/>
            <MyCheckbox id={"1"} label={""} />
            <span className={s.span}> {`Total amount of names is ${names.length}`} </span>
        </div>
    )
}
export default MyComponents