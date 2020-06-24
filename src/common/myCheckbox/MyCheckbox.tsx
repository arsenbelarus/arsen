import React, {useState, ChangeEvent, KeyboardEvent, ButtonHTMLAttributes} from 'react';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./MyCheckbox.module.css"

export type CheckboxPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { id: string, label: string};


const MyCheckbox: React.FC<CheckboxPropsType> = ({id, label, ...restProps}) => {

    return (
        <div>
            <input type={"checkbox"} name={id} id={id} className={s.cssCheckbox} {...restProps}/>
            <label htmlFor={id} className={s.cssLabel}> { label } </label>
        </div>
    );
};

export default MyCheckbox