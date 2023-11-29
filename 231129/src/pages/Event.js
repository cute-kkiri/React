import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

function Football() {
    const shoot = (a) => {
        alert(a + ' Greate  shot!')
    }

    return (
        
        <Button onClick={() => shoot('Goal')}>Take the shoot</Button>
        
    )
}

export default Football;