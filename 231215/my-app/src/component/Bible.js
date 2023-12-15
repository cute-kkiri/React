import '../css/Bible.css';

function Bible(props) {
    return (
        <h1 className="bible">{props.i}. {props.k}({props.e})</h1>
    );
}

export default Bible;
