import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

const myElement = <h1>Jsx easy</h1>;

// jsx를 쓰지 않을 경우 createElement를 사용해야한다.
const noneJsx = React.createElement('h1', {}, 'not use JSX!');

const Jsx = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <h1 className="my-3">What is jsx ?</h1>
                        <pre>
- JavaScript XML을 의미합니다.
- jsx를 사용하면 HTML을 쉽게 작성할 수 있습니다.
                        </pre>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Jsx;