import React, {useState} from "react";
import s from "./PeopleArray.module.css"
import MyButton from "../common/myButton/MyButton";
import {hwReducer} from "../reducers/reducer";
import PeopleArray from "./PeopleArray";

type PeopleArrayAndButtonType = {
    people: Array<{id: string, name: string, age: number}>,
}

const PeopleArrayAndButton = (props: PeopleArrayAndButtonType) => {
    const [peopleArray, setPeopleArray] = useState(props.people)
    return (
        <div>
            <PeopleArray people={peopleArray}/>
            <div style={{width: "50%", margin: "20px 25%", display: "inline-flex", justifyContent: "center", justifySelf: "center"}}>
                <MyButton isStandard={true} value={"Sort UP"} onClick={()=>setPeopleArray (hwReducer(props.people, {type: "SORT", payload: "NAME-UP"}))}/>
                <MyButton isStandard={true} value={"Sort DOWN"} onClick={()=>setPeopleArray (hwReducer(props.people, {type: "SORT", payload: "NAME-DOWN"}))}/>
                <MyButton isStandard={true} value={"Sort 18+"} onClick={()=>setPeopleArray (hwReducer(props.people, {type: "CHECK", payload: "18"}))}/>
                <MyButton isStandard={true} value={"Sort Age"} onClick={()=>setPeopleArray (hwReducer(props.people, {type: "SORT", payload: "AGE-UP"}))}/>
                <MyButton isStandard={true} value={"Sort Age"} onClick={()=>setPeopleArray (hwReducer(props.people, {type: "SORT", payload: "AGE-DOWN"}))}/>
            </div>
        </div>

    )
}

export default PeopleArrayAndButton