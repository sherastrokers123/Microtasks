
type ButtonTypeProps = {
    name: string,
    callBack: () => void,
}


export const ButtonComponent = (props: ButtonTypeProps) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
} 