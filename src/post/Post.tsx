import React from 'react';
import './Post.css';
import Name from "./name/Name";
import Message from './message/Message';
import Avatar from "./avatar/Avatar";
import Time from "./Time/Time";

function Post() {
    return (
        <div className={"main"}>
            <div className={"container"}>
                <Avatar/>
                <div className={"messageBlock"}>
                    <Name/>
                    <Message/>
                    <Time/>
                </div>
            </div>
        </div>
    );
}

export default Post;