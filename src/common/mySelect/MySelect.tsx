import React, {useState} from 'react';
import s from "./MySelect.module.css"

type MySelectType = {
    options: Array<{ value: string, checked: boolean }>
    value: number
    onChange?: (someValue: string|number) => void
}


const MySelect = (props: MySelectType) => {

    return (
        <div className={s.container} >
            <select className={s.select} >
                {props.options.map((option, index) => {
                    if (props.value === index+1) {
                        return <option className={s.option} selected={true} key={index+1}>{option.value}</option>
                    }
                    return <option className={s.option} >{option.value}</option>
                })}
            </select>
        </div>
    )

}

export default MySelect