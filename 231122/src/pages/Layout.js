import { Outlet, Link } from "react-router-dom";
// 라우터 dom에서  outlet link 모듈 사용.

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* <a href=""></a> 대신 <Link to="/">link target 명</Link>를 쓴다. */}
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      {/* 밑에 내용과 내비를 구분하고자. 이것을 써야지만 나온대. */}
    </>
  );
};

// 만든 것을 밖으로 빼주는 역할.
export default Layout; // 클래스나 함수 명을 내보냄.
