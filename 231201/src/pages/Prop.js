import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

// 함수형 component
function Car(props) {
    return <h2>I am a {props.brand.model}!</h2>
}

function Props() {
    const carInfo = {name: 'Ford', model: 'Mustang'}

    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <h1>who lives in my garage?</h1>
                        <Car brand={carInfo} />
                    </Col>
                    <hr />
                    <h1>React Props</h1>
                    <p>React 컴포넌트에 전달되는 인수입니다.<br />
                    읽기전용 입니다. 해당 값을 변경하려고 하면 오류가 발생합니다.
                    </p>
                </Row>
            </Container>
        </>
    )
}

export default Props;