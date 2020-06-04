import React, {useState} from 'react';
import s from './Hobbies.module.css';
import Hobby from "./hobby/Hobby";

type propsType = {
    mydata: Array<any>,
}

type HobbiesPropertyValues = "all" | "high" | "middle" | "low";

function Hobbies(props: propsType) {
    let i = 1;
    let key = 1;
    let [hobbies, setHobbies] = useState(props.mydata.map((h: { n: 'string', p: 'string' }) =>
        <Hobby name={h.n} priority={h.p} id={i++} key={key++} removeHobby={removeHobby}/>));

    function removeHobby(id: number) {
        hobbies = hobbies.filter(h => h.props.id !== id);
        setHobbies(hobbies);
    }

    let [arrange, setArrange] = useState<HobbiesPropertyValues>("all")

    function arrangeHobbies(p: HobbiesPropertyValues) {
        setArrange (p);
    }

    if (arrange === "high") {
            hobbies = hobbies.filter(h => h.props.priority === "high")
        } else if (arrange === "middle") {
            hobbies = hobbies.filter(h => h.props.priority === "middle")
        } else if (arrange === "low") {
            hobbies = hobbies.filter(h => h.props.priority === "low")
        } else if (arrange === "all") {
        hobbies = hobbies
    }


    return (
        <div>
            <div className={s.hobbiesContainer}>
                {hobbies}
            </div>
            <div className={s.buttonContainer}>
                <h2>Arrange by priorities</h2>
                <button onClick={() => {arrangeHobbies ("high")}} className={s.button}> HIGH </button>
                <button onClick={() => {arrangeHobbies ("middle")}} className={s.button}> MIDDLE </button>
                <button onClick={() => {arrangeHobbies ("low")}} className={s.button}> LOW </button>
                <button onClick={() => {arrangeHobbies ("all")}} className={s.button}> ALL </button>
            </div>
        </div>
    );
}

export default Hobbies;