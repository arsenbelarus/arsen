import React, {ChangeEvent, useCallback, useState} from 'react';
import MyEditableSpan from "./common/myEditableSpan/MyEditableSpan";
import MySelect from "./common/mySelect/MySelect";
import MyRadio from "./common/myRadio/MyRadio";
import {v1} from "uuid";
import PeopleArrayAndButton from "./peopleArray/PeopleArrayAndButtons";
import DateComponent from "./date/DateComponent";
import RunLoader from "./runLoader/RunLoader";
import MyRange from "./common/myRange/MyRange";

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
        alert(newValue)
    }
    const [spanTitle, setSpanTitle] = useState("Change me")


    const [rangeValue, setRangeValue] = useState(0)
    const onRangeChange = useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(e.currentTarget.value))
    }, [])


    return (
        <div>
            <RunLoader/>
            <p style={{color: "white", textAlign: "center", fontSize: "1.5em"}}>
                <strong>Double click</strong> on text will make it editable. Press <strong>enter</strong> to
                save changes</p>
            <MyEditableSpan spanTitle={spanTitle} onChange={setSpanTitle}/>
            <MySelect options={optionsArray} value={2} onChange={onSelectChange}/>
            <MyRadio options={radioValues} onChange={onRadioChange}/>
            <PeopleArrayAndButton people={people}/>
            <DateComponent/>
            <MyRange value={rangeValue} minValue={0} maxValue={100} onChange={onRangeChange}/>
        </div>
    );
}

export default Junior;