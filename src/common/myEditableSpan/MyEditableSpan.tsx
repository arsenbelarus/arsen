import React, {useState} from 'react';
import s from "./MyEditableSpan.module.css"
import MyInput from "../myInput/MyInput";

type MyEditableSpanType = {
    spanTitle: string
}


const MyEditableSpan = (props: MyEditableSpanType) => {
    const [editMode, setEditMode] = useState(false)
    const onBlur = () => {
        setEditMode(false);
    }

    return (
        <div>
            {editMode
            ? <MyInput autoFocus={true} value={props.spanTitle} onBlur={onBlur}/>
            : <div className={s.container}><span onDoubleClick={() => setEditMode(true)}> {props.spanTitle} </span></div>}
        </div>
    )

};

export default MyEditableSpan