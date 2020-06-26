import React from 'react';
import Post from "./post/Post";
import Hobbies from "./hobbies/Hobbies";
import MyComponents from "./MyComponents";

type propsType = {
    hobbies: Array<{ id: number, n: string, p: string }>
}

function PreJunior(props: propsType) {
    return (
        <div>
            <Post postName={'Arsen Vaskanian'} postMessage={'npm start нажимал?'} postTime={'22:00'}/>
            <Hobbies mydata={props.hobbies}/>
            <MyComponents/>
        </div>
    );
}

export default PreJunior;