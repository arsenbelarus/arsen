import React from 'react';
import s from './Hobby.module.css';

type propsType = {
    name: string,
    priority: string,
    id: number,
    key: number,
    removeHobby: (id: number) => void,
}


function Hobby(props: propsType) {

    return (
        <div className={s.hobby}>
            <div className={s.name}> {props.name} </div>
            <div className={s.priority}> {props.priority} </div>
            <div className={s.removeButton}> <button onClick={() => {props.removeHobby(props.id)}}> remove </button> </div>
        </div>
    );
}

export default Hobby;