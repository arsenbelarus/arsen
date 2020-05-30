import React from "react";
import s from './Avatar.module.css'
import avatar from './avatar.jpg'
type propsAvatar = {
    src: string,
    alt: string
}
function Avatar(props: propsAvatar) {
    return (
        <div className={s.avatarImage}>
            <img src={props.src} alt={props.alt}/>
        </div>
    );
}

export default Avatar;