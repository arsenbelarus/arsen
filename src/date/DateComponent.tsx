import React, {useState} from "react";
import moment from "moment";
import MyButton from "../common/myButton/MyButton";
import s from "./DateComponent.module.css"

type DateComponentPropsType = {}
let timer: NodeJS.Timeout;
const DateComponent = (props: DateComponentPropsType) => {

    const [timerId, setTimerId] = useState(moment().format('h:mm:ss a'));

    const startTimer = () => {
        timer = setInterval(() => setTimerId(moment().format('h:mm:ss a')), 1000);
    }

    const stopTimer = () => {
        clearInterval(timer)
    }

    return (
        <div className={s.mainContainer}>
            <div className={s.header}>You can start and stop timer by clicking buttons. Try to point mouse on timer</div>
            <div className={s.container}>
                <div className={s.timer}>
                    {timerId}
                </div>
                <div className={s.date}>
                    {moment().format("D.MM.YYYY")}
                </div>
                <MyButton value={"Start"} onClick={startTimer} isStandard/>
                <MyButton value={"Stop"} onClick={stopTimer} isStandard/>

            </div>
        </div>
    )

}

export default DateComponent