import React, {ChangeEvent, useState} from 'react';
import s from "./MyRadio.module.css"

type MySelectType = {
    options: Array<{ value: string, checked: boolean }>
    value?: number
    name?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}


const MyRadio = (props: MySelectType) => {
    return (
        <div className={s.container}>
            {props.options.map(radio => {
                return (
                    <div>
                        <input type={"radio"}
                               id={radio.value}
                               value={radio.value}
                               name={props.name}
                               checked={radio.checked}
                               onChange={props.onChange}/>
                        <label htmlFor={radio.value}>{radio.value}</label>
                    </div>
                )
            })}
        </div>
    )

}

export default MyRadio