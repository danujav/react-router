export default function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className={`${props.style}`}>{props.children}</button>
    );
}
