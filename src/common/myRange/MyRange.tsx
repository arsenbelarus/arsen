import React, {ChangeEvent} from "react";
import s from "./MyRange.module.css"


type MyRangeType = {
    value: number,
    minValue: number,
    maxValue: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    step?: number,
}


const MyRange = React.memo ((props: MyRangeType) => {
    return (
        <>
            <div className={s.myRange}>
                <span className={s.minmaxValues}>{props.minValue}</span>
                <input type="range" value={props.value} min={props.minValue} max={props.maxValue}
                       onChange={props.onChange} step={props.step}/>
                <span className={s.currentValue}>{props.value}</span>
                <span className={s.minmaxValues}>{props.maxValue}</span>
            </div>
        </>
    )
})

export default MyRange