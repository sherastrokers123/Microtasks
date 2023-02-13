import React from "react";

type NewComponentPropsType = {
    currentMoney: CurrentMoneyPropsType[]
}

type CurrentMoneyPropsType = {
    banknote: string,
    nominal: number,
    number: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}