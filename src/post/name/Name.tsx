import React from "react";
import s from './Name.module.css'
type propsName = {
    name: string,
}
function Name(props: propsName) {
    return (
        <div className={s.fullName}>
            {props.name}
        </div>
    );
}

export default Name;