import React, {ChangeEvent, useState} from 'react';
import s from "./MySelect.module.css"

type MySelectType = {
    options: Array<{ value: string, checked: boolean }>
    value: number
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}


const MySelect = (props: MySelectType) => {

    return (
        <div className={s.container} >
            <select className={s.select} onChange={props.onChange}>
                {props.options.map((option, index) => {
                    if (props.value === index+1) {
                        return <option className={s.option} value={props.value} key={index+1}>{option.value}</option>
                    }
                    return <option className={s.option} >{option.value}</option>
                })}
            </select>
        </div>
    )

}

export default MySelect