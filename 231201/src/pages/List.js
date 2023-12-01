// import는 호이스팅 원리로 제일 위에 있어야만 함.
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function Fruits(props) {
    return <li> i am a {props.brand}</li>
}

function Set() {
    const set = ['apple', 'banana', 'orange']

    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <ul>
                            {set.map((set) => <Fruits brand={set} />)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Set;