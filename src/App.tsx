import React from 'react';
import './App.css';
import {HashRouter, NavLink, Route} from "react-router-dom";
import PreJunior from "./PreJunior";
import JuniorPlus from "./JuniorPlus";
import Junior from "./Junior";

type propsType = {
    hobbies: Array<{ id: number, n: string, p: string }>
}
const App = (props:propsType) => {


    return (
        <HashRouter>
        <div>
            <nav className={"navbar"}>
                <NavLink to={"/PreJunior"} className={"menuItem"} activeClassName={"active"}> PreJunior </NavLink>
                <NavLink to={"/Junior"} className={"menuItem"} activeClassName={"active"}> Junior </NavLink>
                <NavLink to={"/JuniorPlus"} className={"menuItem"} activeClassName={"active"}> JuniorPlus </NavLink>
            </nav>
            <Route path='/PreJunior' render={() => <PreJunior hobbies={props.hobbies}/>}/>
            <Route path='/Junior' render={() => <Junior />}/>
            <Route path='/JuniorPlus' render={() => <JuniorPlus />}/>
        </div>
        </HashRouter>
    );
}

export default App;