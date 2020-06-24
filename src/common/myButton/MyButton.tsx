import React, {useState, ChangeEvent, KeyboardEvent, ButtonHTMLAttributes} from 'react';
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./MyButton.module.css"
export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { inputHandler?: () => void, isStandard?: boolean };

const MyButton: React.FC<ButtonNyaPropsType> = ({inputHandler, isStandard, ...restProps}) => {

    return (
        <div>
            <button className={ !isStandard? s.buttonRed : s.button }
                    onClick={inputHandler}
                    {...restProps}>{!isStandard? "x" : restProps.value}</button>
        </div>
    );
};

export default MyButton