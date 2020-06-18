import React, {useState, ChangeEvent, KeyboardEvent, ButtonHTMLAttributes} from 'react';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./InputNya.module.css"
export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string };
export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { onButtonEnter?: () => void, buttonError?: string };

const InputNya: React.FC<InputNyaPropsType> = ({onEnter, error, ...restProps}) => {

    let [errorMessage, setErrorMessage] = useState<string|undefined>("")
    let [title, setTitle] = useState("")
    let [inputClass, setInputClass] = useState<string>(s.input)
    let [spanClass, setSpanClass] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setInputClass(s.input)
        setSpanClass("")
        setErrorMessage("")
    }
    const onEnterHandler = (e: KeyboardEvent) => {
        if (e.charCode === 13) {
            if (title.trim() === "") {
                setInputClass(s.errorInput)
                setSpanClass(s.errorSpan)
                setErrorMessage (error)
            } else {
                onEnter && onEnter()
                setTitle("")
            }
        }
    }
    const onButtonClick = () => {onEnter && onEnter()}


    return (
        <div className={s.container}>
            <input className={ inputClass } {...restProps}
                   onChange={onChangeHandler}
                   onKeyPress={onEnterHandler}
                   value={title}
                   type="text"/>
            {errorMessage && <span className={ spanClass } > {error} </span>}
            <button<ButtonNyaPropsType> className={s.button} onClick={onButtonClick}> X </button>
        </div>
    );
};

export default InputNya