import React from "react"

type TopCarsComponentPropsType = {
    topCars: TopCarPropsType[]
}
type TopCarPropsType = {
    manufacturer: string,
    model: string
}

export const TopCarsComponent = (props: TopCarsComponentPropsType) => {
    return (
        <ul>
            {props.topCars.map((topCarObjectFromTopCarsArray, index) => {
                return (
                    <li key={index + 1}>
                        <span>{topCarObjectFromTopCarsArray.manufacturer}</span>
                        <span>{topCarObjectFromTopCarsArray.model}</span>
                    </li>
                )
            })}

        </ul>
    )
};

