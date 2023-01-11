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
            {props.students.map((objectFromStudentArray,))}
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>

    )
};
// let arr = [1, 2, 3];
// console.log(arr.map((el)=>{
//     return el
// }));
