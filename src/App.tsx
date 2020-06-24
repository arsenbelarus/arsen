import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import Post from "./post/Post";
import Hobbies from "./hobbies/Hobbies";
import MyComponents from "./MyComponents";

type propsType = {
    hobbies: Array<{ id: number, n: string, p: string }>
}

function App(props: propsType) {


    return (
        <div>
            <div>
                <Post postName={'Arsen Vaskanian'} postMessage={'npm start нажимал?'} postTime={'22:00'}/>
            </div>
            <Hobbies mydata={props.hobbies}/>

            <MyComponents/>
        </div>
    );
}

export default App;
