import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Oper from './cond/Oper';
import Three from './cond/Three';

function Cont() {
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="my-3">조건부 렌더링</h1>
                        <p>
                            react에서는 조건부로 구성 요소를 렌더링 할 수 있습니다.<br />
                            몇 가지 방법이 있습니다. if, &&, 삼항연산자<br />
                        </p>
                        {/* 모듈을 만들어서 불러오기 */}
                        <Oper cars={cars} />
                        <Three isGoal={false}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const cars = ['ford', 'bmw', 'audi'];

export default Cont