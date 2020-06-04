import React from 'react';
import './App.css';
import Post from "./post/Post";
import Hobbies from "./hobbies/Hobbies";

type propsType = {
    hobbies: any
}
function App(props: propsType) {
    return (
        <div>
            <div>
                <Post postName={'Arsen Vaskanian'} postMessage={'npm start нажимал?'} postTime={'22:00'}/>
                <Post postName={'Arsen Vaskanian'}
                      postMessage={'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку.'}
                      postTime={'23:30'}/>
                <Post postName={'Tigran Vaskanian'} postMessage={'Кажется я уже все...'} postTime={'03:15'}/>
            </div>

            <Hobbies mydata={props.hobbies}/>

        </div>

    );
}

export default App;
