import React, {useState, ChangeEvent, KeyboardEvent, ButtonHTMLAttributes} from 'react';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./MyButton.module.css"
export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {isStandard?: boolean, value: string, onClick: () => void };

const MyButton = (props: ButtonNyaPropsType) => {

    return (
        <div>
            <button onClick={props.onClick} className={!props.isStandard? s.buttonRed : s.button}>{!props.isStandard? "x" : props.value}</button>
        </div>
    );
};

export default MyButton