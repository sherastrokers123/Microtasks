import React from "react"

type TopCarsComponentPropsType = {
    topCars: TopCarPropsType[]
}
type TopCarPropsType = {
    manufacturer: string,
    model: string
    key: number
}
export const TopCarsComponent = (props: TopCarsComponentPropsType) => {
    return (
        <ul>
            {props.topCars.map((topCarObjectFromTopCarsArray, index) => {
                return (
                    <li key={topCarObjectFromTopCarsArray.key}>
                        <span> {topCarObjectFromTopCarsArray.manufacturer} </span>
                        <span> {topCarObjectFromTopCarsArray.model} </span>
                    </li>
                )
            })}

        </ul>
    )
};
