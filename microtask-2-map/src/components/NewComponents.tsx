import { type } from "@testing-library/user-event/dist/type";
import React from "react"

type NewComponentPropsType = {
    students: StudentTypeProps[]
}

type StudentTypeProps = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.students.map((objectStudentFromArray, index) => {
                return (
                    <li key={objectStudentFromArray.id}>
                        <span> {objectStudentFromArray.name}</span>
                        <span> {objectStudentFromArray.age}</span>
                    </li>
                )
            })}
        </ul>

    )
};




