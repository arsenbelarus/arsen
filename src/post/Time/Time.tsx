import React from "react";
import s from './Time.module.css'
type propsTime = {
    time: string,
}
function Time(props: propsTime) {
    return (
        <div className={s.time}>
            {props.time}
        </div>
    );
}

export default Time;