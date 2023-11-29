import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

const Es6 = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <h1 className="my-3">Es6 ?</h1>
                        <pre>
- react를 사용하기 위해서 알아야 할 최소한의 script<br />
- class, Arrow Function, Let, const, var, Array .map, Modules,<br />
Ternary Operator(삼항 연잔자), Spread Operator(확산 연산자 ...)<br />
                        </pre>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Es6;