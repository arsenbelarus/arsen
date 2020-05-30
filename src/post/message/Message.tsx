import React from "react";
import s from './Message.module.css'
type propsMessage = {
    message: string,
}
function Message(props: propsMessage) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )

}

export default Message;