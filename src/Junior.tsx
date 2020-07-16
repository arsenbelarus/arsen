import React, {ChangeEvent, useState} from 'react';
import MyEditableSpan from "./common/myEditableSpan/MyEditableSpan";
import MySelect from "./common/mySelect/MySelect";
import MyRadio from "./common/myRadio/MyRadio";
import {v1} from "uuid";
import PeopleArray from "./peopleArray/PeopleArray";
import MyButton from "./common/myButton/MyButton";
import {hwReducer} from "./reducers/reducer";

function Junior() {

    const optionsArray = [
        {value: "React", checked: false},
        {value: "Redux", checked: false},
        {value: "Poker", checked: false},
        {value: "Chess", checked: false},
    ]
    const people = [
        {id: v1(), name: "Arsen", age: 37},
        {id: v1(), name: "Olga", age: 40},
        {id: v1(), name: "Tigran", age: 10},
        {id: v1(), name: "David", age: 5},
    ]

    const [radioValues, setRadioValues] = useState(optionsArray)
    const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        let stateCopy = [...radioValues];
        let newRadioValues = stateCopy.map((radio) => {
            if (radio.value === newValue) {
                return {...radio, checked: true}
            } else {
                return {...radio, checked: false}
            }
        })
        setRadioValues(newRadioValues)
    }

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        alert (newValue)
    }
    const [spanTitle, setSpanTitle] = useState("Change me")

    const [peopleArray, setPeopleArray] = useState(people)

    return (
        <div>
            <p style={{color: "white", textAlign: "center", fontSize: "1.5em"}}>
                <strong>Double click</strong> on text will make it editable. Press <strong>enter</strong> to save changes</p>
            <MyEditableSpan spanTitle={spanTitle} onChange={setSpanTitle}/>
            <MySelect options={optionsArray} value={2} onChange={onSelectChange}/>
            <MyRadio options={radioValues} onChange={onRadioChange}/>
            <PeopleArray people={peopleArray}/>
            <div style={{width: "50%", margin: "20px 25%", display: "inline-flex", justifyContent: "center", justifySelf: "center"}}>
                <MyButton isStandard={true} value={"Sort UP"} onClick={()=>setPeopleArray (hwReducer(peopleArray, {type: "SORT", payload: "NAME-UP"}))}/>
                <MyButton isStandard={true} value={"Sort DOWN"} onClick={()=>setPeopleArray (hwReducer(peopleArray, {type: "SORT", payload: "NAME-DOWN"}))}/>
                <MyButton isStandard={true} value={"Sort 18+"} onClick={()=>setPeopleArray (hwReducer(peopleArray, {type: "SORT", payload: "18"}))}/>
                <MyButton isStandard={true} value={"Sort Age"} onClick={()=>setPeopleArray (hwReducer(peopleArray, {type: "SORT", payload: "AGE-UP"}))}/>
                <MyButton isStandard={true} value={"Sort Age"} onClick={()=>setPeopleArray (hwReducer(peopleArray, {type: "SORT", payload: "AGE-DOWN"}))}/>
            </div>
        </div>
    );
}

export default Junior;