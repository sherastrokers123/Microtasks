import React from "react"

// type NewComponentPropsType = {
//     students: StudentTypeProps[]
// }

// type StudentTypeProps = {
//     id: number,
//     name: string,
//     age: number
// }

// export const NewComponent = (props: NewComponentPropsType) => {
//     return (
//         <ul>
//             {props.students.map((objectStudentFromArray, index) => {
//                 return (
//                     <li key={objectStudentFromArray.id}>
//                         <span> {objectStudentFromArray.name}</span>
//                         <span> {objectStudentFromArray.age}</span>
//                     </li>
//                 )
//             })}
//         </ul>

//     )
// };

// 2 типизируем пропсы компоненты 
type TopCarsComponentsPropsType = {
    topCars: TopCarsTypeProps[]
}
// 3 типизхируем коллекцию массива в данном случае это был обьект  
type TopCarsTypeProps = {
    manufacturer: string,
    model: string
}
// 1 создаем компоненту 
export const TopCarsComponents = (props: TopCarsComponentsPropsType) => {
    return (
        <ul>
            {props.topCars.map((topCarsFromTopCarsArray) => {
                return (
                    <li key={topCarsFromTopCarsArray.model}>
                        <span>  {topCarsFromTopCarsArray.manufacturer}</span>
                        <span>  {topCarsFromTopCarsArray.model}</span>
                    </li>
                )
            })}

        </ul>
    )
}


