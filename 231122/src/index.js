import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 라우팅 설치 후 사용하는 모듈 임포트

// subpage
// 같은 경로에서도 반드시 경로 표시 해줘야함.
import Layout from "./pages/Layout";
import Home from "./pages/Home";

export default function App() {
  /* 이부분이 렌더링 되는 부분입니다. */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />{/* 마감처리를 꼭 해야됩니다. */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
