import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Snap from './life/Snap';

// layout.js에 nav에서 class href 오타 있었다.
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'red',
            year: 1964
        };
    }

    changeColor = () => {
        this.setState({color: 'blue'})
    }

    render() {
        return(
            <>
                <Container>
                    <Row>
                        <Col lg="7" md="6" sm="3">
                            <h1>My {this.state.brand}</h1>
                        </Col>
                        <Col lg="3" md="3" sm="4">
                            <p>
                                It is a {this.state.color} 
                                {this.state.model} from 
                                {this.state.year}
                            </p>
                        </Col>
                        <Col lg="2" md="3" sm="4">
                            <Button 
                            variant="outline-success"
                            onClick={this.changeColor}
                            >
                                Change color
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <h1>Lifecycle of Component</h1>
                            <pre>
                                - Mounting, Updating, Unmounting
                            </pre>
                            <h1 className="my-3">Mounting</h1>
                            <pre>
                                1. constructor() : 구성 요소가 시작될 때 다른 것 보다 먼저 호출합니다.(가장 먼저)<br />
                                2. getDerivedStateFromProps() : DOM의 요소를 렌더링 하기 직전에 호출됩니다.<br />
                                3. render() : HTML을 DOM에 출력해주는 메소드입니다.<br />
                                4. componentDidMount() : 구성 요소가 렌더링 된 후에 호출됩니다.(가장 마지막)
                            </pre>

                            <h1 className="my-3">Updating : 수명주기의 두 번째 단계</h1>
                            <pre>
                                구성 요소의 상태나 소품(props)이 변경될 때 마다 구성 요소가 업데이트 됩니다.<br />
                                1. getDerivedStateFromProps() : 구성 요소가 업데이트될 때 천 번째로 호출.<br />
                                2. shouldComponentUpdate() : 렌더링을 계속해야 하는지에 대한 여부를 지정하는 부울 값을 리턴합니다.<br />
                                3. render() : 구성 요소가 업데이트 되어서 다시 렌더링 됩니다.<br />
                                4. getSnapshotBeforeUpdate() : 업데이트 이전에 상태에 대해서 엑세스 할 수 있습니다.<br />
                                5. componentDidUpdate() : 4번 메소드가 존재하는 경우 같이 포함해야하며 그렇지 않으면 오류가 발생합니다.
                            </pre>

                            <h1 className="my-3">Unmounting</h1>
                            <pre>
                                componentWillUnmount : DOM에서 제거 언마운트
                            </pre>

                            <h1>아래의 예시로 알아볼께요.</h1>
                            <Snap />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Car;