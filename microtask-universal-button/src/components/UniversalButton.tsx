type ButtonComponentTypeProps = {
    name: string,
    callBack: () => void,
}
export const ButtonComponent = (props: ButtonComponentTypeProps) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}