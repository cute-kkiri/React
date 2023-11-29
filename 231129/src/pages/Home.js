// bootstrap cdn
import 'bootstrap/dist/css/bootstrap.min.css';
// 리액트 부트스트랩 사용 요소 불러오기
import {Col, Container, Row} from 'react-bootstrap';

const Home = () => {
  // return <h1>Hello world</h1>;
  return (
    <>
      {/* bootstrap react를 쓰면 class로 쓰는 대신 이렇게 쓸 수 있다. */}
      {/* <Container fluid> 꽉찬 가로를 얻을 수 있음*/}
      <Container>{/* 가로폭 default */}
        <Row>{/* 줄 */}
          <Col lg="12" md="12" sm="12">{/* 칸 */}
            <h1 className="my-3">React js</h1>
            <pre>
              {/* 리액트에서의 pre는 br을 해줘야 함. */}
              - reactjs에 현재 버전은 V18.0.0(2022년 4월) 입니다.<br/>
              - 최초버전은 2013년 7월에 이루어 졌습니다.<br/>
              - 2011년에 뉴스피드기능에 처음 사용되었습니다.<br/>
              - react를 사용하려고 하면 아래와 같은 몇 가지 새로운 기능에 익숙해야 됩니다.(es6에 등장하는)<br/>
              class, arrowfunc, let, const, var, .map(), 구조분해, 모듈, 삼항연산자, 확산연산자<br/>
            </pre>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Home;
