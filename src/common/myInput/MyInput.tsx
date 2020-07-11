import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./MyInput.module.css"

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { addItem?: (value: string) => void, autoFocus?: boolean, onBlur?: () => void, value: string, onChangeTitle?: (value: string) => void, };

const MyInput = (props: InputNyaPropsType, {...restProps}) => {

    let [title, setTitle] = useState<any>(props.value);
    let [error, setError] = useState<null | string>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError("");
        setTitle(e.currentTarget.value)
        props.onChangeTitle && props.onChangeTitle(e.currentTarget.value)
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItem()
        }
    };
    const addItem = () => {
        if (title.trim() !== "" && props.addItem) {
            props.addItem(title);
            setTitle("")
        } else {
            setError("Title is required")
            setTitle("")
        }
    };


    return (
            <div className={s.container}>
                <input className={!error ? s.input : s.inputError}
                       onKeyPress={onKeyPressHandler}
                       onChange={onChangeHandler}
                       autoFocus={props.autoFocus}
                       onBlur={props.onBlur}
                       value={title}
                       {...restProps}
                />
            </div>
    )
};

export default MyInput