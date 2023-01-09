type FooterPropsType = {
    titleForFooter: string;
}
export const Footer = (props: FooterPropsType) => {
    return (
        <div> {props.titleForFooter} </div>
    )
}