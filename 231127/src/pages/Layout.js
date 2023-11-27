import { Outlet, Link } from "react-router-dom";
// 라우터 dom에서  outlet link 모듈 사용.
// import '../css/Sass.scss'
// 리액트에서는 sass 컴파일을 따로 하지 않아도 된다고는 함.

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';

const Layout = () => {
  // {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
  return (
    <>
    {/* <a href=""></a> 대신 <Link to="/">link target 명</Link>를 쓴다. to가 a태그의 href같음. */}
    {/* sub page로 만들 module들, to에서는 소문자 써줬네? text는 헷갈리지 않으려고 fullname으로 적음. */}
    {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            Logo
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavBar-expand-${expand}`} />
          
          <Navbar.Offcanvas 
          id={`offcanvasNavbar-expand-${expand}`} 
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-exand-${expand}`}>
                React tutorial
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/es6">Es6</Nav.Link>
                <Nav.Link href="/jsx">Jsx</Nav.Link>
                <Nav.Link href="/com">Component</Nav.Link>
                <Nav.Link href="/class">Class</Nav.Link>
                <Nav.Link href="/prop">Props</Nav.Link>
                <Nav.Link href="/event">Event</Nav.Link>
                <Nav.Link href="/cont">Condition</Nav.Link>
                <Nav.Link href="/list">List</Nav.Link>
                <Nav.Link href="/forms">Forms</Nav.Link>
                <Nav.Link href="/sass">Sass</Nav.Link>
                <Nav.Link href="/us">useState</Nav.Link>
                <Nav.Link href="/ue">useEffect</Nav.Link>
                <Nav.Link href="/uc">useContext</Nav.Link>
                <Nav.Link href="/ur">useReducer</Nav.Link>
                <Nav.Link href="/ucb">useCallback</Nav.Link>
                <Nav.Link href="/memo">useMemo</Nav.Link>
                <Nav.Link href="/ch">Custom hooks</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Form.Control 
                type="search"
                placeholder="Search"
                className="me-2"
                />
                <Button variant="outline-success">
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
    ))}
      {/* 
      // 먼저 기존에 적어 줬던 nav 형태. Nav.Link로 옮김
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/es6">Es6</Link></li>
          <li><Link to="/jsx">Jsx</Link></li>
          <li><Link to="/com">Component</Link></li>
          <li><Link to="/class">Class</Link></li>
          <li><Link to="/prop">Props</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><Link to="/cont">Condition</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/forms">Forms</Link></li>
          {/ * <li><Link to="/memo">Memo</Link></li> * /}
          <li><Link to="/sass">Sass</Link></li>
          <li><Link to="/us">useState</Link></li>
          <li><Link to="/ue">useEffect</Link></li>
          <li><Link to="/uc">useContext</Link></li>
          {<li><Link to="/ur">useReducer</Link></li>}
          {/ * <li><Link to="/urc">useReducer</Link></li> * /}
          <li><Link to="/ucb">useCallback</Link></li>
          <li><Link to="/memo">useMemo</Link></li>
          <li><Link to="/ch">Custom hooks</Link></li>
        </ul>
      </nav> */}
      <Outlet />{/* 밑에 내용과 내비를 구분하고자. 이것을 써야지만 나온대. */}
    </>
  );
};

// 만든 것을 밖으로 빼주는 역할.
export default Layout; // 클래스나 함수 명을 내보냄.
