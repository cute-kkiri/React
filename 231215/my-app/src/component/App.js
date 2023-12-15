import logo from '../images/logo.svg';
import '../css/App.css';
// JSON파일 읽기
import bible from '../data/bibleName.json'; // bible이라는 변수에 json data를 저장하라는 뜻.
import hanja from '../data/hanja.json';
// js는 확장자 안적어줘도 되고
import Bible from './Bible';
import Hanja from './Hanja';

function App() {
    return (
        <div className="App">
            <h1>Hello React Application</h1>
            <img src={logo} className="App-logo" alt="logo" />

            {/* <ul>
                {
                    bible.map((item, i) => (
                        {<li key={i}>{item.k}({item.e})</li>}
                    ))
                }
            </ul> */}
            {
                hanja.map((item, i) => (
                // bible.map((item, i) => (
                    // <Bible i={item.i} k={item.k} e={item.e} />
                    <Hanja h={item.h} k={item.k} t={item.t} />
                ))
            }
        </div>
    );
}

export default App;
