import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 라우팅 설치 후 사용하는 모듈 임포트

// subpage
import Es6 from './pages/Es6';
import Jsx from './pages/Jsx';
import Com from './pages/Com';
import Cla from './pages/Cla';
import Prop from './pages/Prop';
import Event from './pages/Event';
import Cont from './pages/Cont';
import List from './pages/List';
import Forms from './pages/Forms';
import Memo from './pages/Memo';
import Sass from './pages/Sass';

import Us from './pages/Us';
import Ue from './pages/Ue';
import Uc from './pages/Uc';
import Ur from './pages/Ur';
import Urc from './pages/Urc';
import Ucb from './pages/Ucb';
import Ch from './pages/Ch';

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
            {/* path는 소문자, element는 모듈 이름 그대로 */}
            <Route path="es6" element={<Es6 />} />
            <Route path="jsx" element={<Jsx />} />
            <Route path="cont" element={<Cont />} />
            <Route path="cla" element={<Cla />} />
            <Route path="prop" element={<Prop />} />
            <Route path="event" element={<Event />} />
            <Route path="com" element={<Com />} />
            <Route path="list" element={<List />} />
            <Route path="forms" element={<Forms />} />
            <Route path="memo" element={<Memo />} />
            <Route path="sass" element={<Sass />} />
            <Route path="us" element={<Us />} />
            <Route path="ue" element={<Ue />} />
            <Route path="uc" element={<Uc />} />
            <Route path="ur" element={<Ur />} />
            <Route path="urc" element={<Urc />} />
            <Route path="ucb" element={<Ucb />} />
            <Route path="ch" element={<Ch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
