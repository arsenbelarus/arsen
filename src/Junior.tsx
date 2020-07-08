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
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    return (
        <div>
            <MyEditableSpan spanTitle={"Hello"}/>
            <MySelect options={optionsArray} value={2}/>
            <MyRadio options={radioValues} onChange={onChange}/>
        </div>
    );
}

export default Junior;