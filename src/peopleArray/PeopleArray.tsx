import React from "react";
import s from "./PeopleArray.module.css"

type peopleArrayType = {
    people: Array<{id: string, name: string, age: number}>,
}

const PeopleArray = (props: peopleArrayType) => {

    return (
        <>
            {props.people.map((person, index) => {
                return (
                    <div className={s.peopleArray}>
                        <span>{index+1}</span>
                        <span>{person.name}</span>
                        <span>{person.age}</span>
                    </div>
                    )
            })}
        </>
    )
}

export default PeopleArray