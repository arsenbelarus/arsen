import React, {ChangeEvent, useState} from 'react';
import MyEditableSpan from "./common/myEditableSpan/MyEditableSpan";
import MySelect from "./common/mySelect/MySelect";
import MyRadio from "./common/myRadio/MyRadio";

function Junior() {

    const optionsArray = [
        {value: "React", checked: false},
        {value: "Redux", checked: false},
        {value: "Poker", checked: false},
        {value: "Chess", checked: false},
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

    return (
        <div>
            <p style={{color: "white", textAlign: "center", fontSize: "1.5em"}}>
                <strong>Double click</strong> on text will make it editable. Press <strong>enter</strong> to save changes</p>
            <MyEditableSpan spanTitle={spanTitle} onChange={setSpanTitle}/>
            <MySelect options={optionsArray} value={2} onChange={onSelectChange}/>
            <MyRadio options={radioValues} onChange={onRadioChange}/>
        </div>
    );
}

export default Junior;