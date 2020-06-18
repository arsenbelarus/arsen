import React, {KeyboardEvent} from 'react';
import './App.css';
import Post from "./post/Post";
import Hobbies from "./hobbies/Hobbies";
import Input from "./input/Input";
import InputNya from "./Homework4";

type propsType = {
    hobbies: Array<{ id: number, n: string, p: string }>
}
function App(props: propsType) {
    const test = () => {
        alert("Кажется, я все понял")
    }
    const buttonTest = () => {

    }

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
            
            <Input />

            <InputNya onEnter={test} error={'Input should not be empty'} placeholder={'Домашнее задание 4'}/>

        </div>

    );
}

export default App;
