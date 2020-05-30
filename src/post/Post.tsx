import React from 'react';
import s from './Post.module.css';
import Name from "./name/Name";
import Message from './message/Message';
import Avatar from "./avatar/Avatar";
import Time from "./Time/Time";
import avatar from "./avatar/avatar.jpg";
type propsPost = {
    postName: string,
    postMessage: string,
    postTime: string
}

function Post(props: propsPost) {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <Avatar src={avatar} alt={'avatar'}/>
                <div className={s.messageBlock}>
                    <Name name={props.postName}/>
                    <Message message={props.postMessage}/>
                    <Time time={props.postTime}/>
                </div>
            </div>
        </div>
    );
}

export default Post;