// 함수형은 필요없지만 class형에는 필요함.
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

/* 
document에서 id를 찾아렌더링 할 경우에는
import ReactDOM from "reactdom/client";
*/

class Com extends React.Component {
    constructor() { // 구성 요소가 시작될 때 이 함수가 호출됨.
        super();
        // 초기상태를 만들어 놓는
        this.state = {color: 'red'}; // 구성요소 속성은 state에 저장됨.
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md="12">
                            <h1 className="my-3">React Component</h1>
                            <pre>
                                - React16.8 버전 이전에는 class형 component가 state와 수명주기를 추적하는 유일한 방법 이었습니다.
                                - 함수구성요소는 "state(상태)가 없는 것"으로 간주 되었습니다.
                                - Hook가 추가되면서 함수형 component가 class구성요소와 거의 동일해 졌습니다.
                                - 그래서 함수형을 권장 하지만 class형 component를 제거할 계획은 없습니다.
                            </pre>
                            <h2>I am a {this.state.color} car</h2>
                            <hr />
                            {/* props는 부속품이라는 뜻 index.js에서 com(지금 가지고 있는 class)에 해당하는 곳에 적용해준 color의 속성 값을 불러옴. */}
                            <h2>I am a {this.props.color} car</h2>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Com;