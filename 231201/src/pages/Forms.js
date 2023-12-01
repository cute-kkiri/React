import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function Myform() {
    // useState => 상태 변경.
    const [name, setName] = useState(''); // 일단 처음에 비워두기.
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`the name you entered was: ${name}`);
    }

    return (
        <>
        {/* form에서 위에서 만들어준 handleSubmit 함수를 사용해줘. */}
        <form onSubmit={handleSubmit}>
            <label> Enter your name :
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
        </>
    )
}

export default Myform;