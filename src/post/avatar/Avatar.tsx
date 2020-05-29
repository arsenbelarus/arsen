import React from "react";
import './Avatar.css'
import avatar from './avatar.jpg'

function Avatar() {
    return (
        <div className={"avatarImage"}>
            <img src={avatar} alt={"avatar"}/>
        </div>
    );
}

export default Avatar;