import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./MyInput.module.css"
export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string, onChangeHandler?: () => void, onKeyPressHandler?: () => void, };

const MyInput: React.FC<InputNyaPropsType> = ({onEnter, error, value, onChangeHandler, onKeyPressHandler,  ...restProps}) => {


    return (
        <div className={s.container}>
            <input className={!error? s.input : s.inputError}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChangeHandler}
                   value={value}
                   {...restProps}
                   type="text"
            />
        </div>
    );
};

export default MyInput