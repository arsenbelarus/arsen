import React from 'react';
import './App.css';
import Post from "./post/Post";

function App() {
    return (
        <div>
            <Post postName={'Arsen Vaskanian'} postMessage={'npm start нажимал?'} postTime={'22:00'}/>
            <Post postName={'Arsen Vaskanian'} postMessage={'Домашку-то сделал уже по пропсам или не успел?'} postTime={'23:30'}/>
            <Post postName={'Tigran Vaskanian'} postMessage={'Кажется я уже все...'} postTime={'03:15'}/>
        </div>
    );
}

export default App;
