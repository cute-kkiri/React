import './App.css';
import Box from './Box';

function App() {
    return (
        /* <></> 반드시 태그로 감싸서 작성해줘야하기 때문에 프레그먼트인 빈 태그를 쓰는 것. 안써도 무관. */
        <div className="App">
            <Box name="러바오" num="1" />
            <Box name="아이바오" num="2" />
            <Box name="푸바오" num="3" />
            <Box name="쌍둥이바오" num="4" />
            {/* <Box></Box> */}
        </div>
    );
}

export default App;
