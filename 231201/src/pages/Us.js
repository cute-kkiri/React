import React, {useState} from 'react'; // useState를 사용하기 위해 불러옴.
// import ReactDOM from 'react-dom/client'; // document를 불러오는거 아니면(또는 불러올 때 필요한 것.) 필요없다.(ex. getElementById)

function Us() {
    // 최상위 수준 (javascript를 doctype에서 불러오는 것과 같이 상위에서 불러오는 것)
    const [color, setColor] = useState('red'); // 초기값 red

    return (
        <>
            <h1>hook</h1>
            <p>
                후크를 사용하면 상태 / 수명주기 메서드와 같은 react 기능에 연결할 수 있습니다.
                후쿠의 3가지 규칙
                - React함수 컴포넌트 내에서만 호출할 수 있다.
                - 컴포넌트의 최상위 수준에서만 호출할 수 있다.
                - 조건부일 수 없다.

                useState는 함수 구성 요소를 호출하여 상태를 초기화 합니다.
                초기 상태를 받아들이고 두 가지 값을 리턴합니다.
                - 현재상태(초기값)
                - 상태업데이트
            </p>
            <hr />
            <h1>My favorite color is {color}!</h1>
            <p>
                <button onClick={() => setColor('blue')}>blue</button>
            </p>
        </>
    )
}

// state 객체 및 배열 업데이트
// 상태가 업데이트되면 전체 상태를 덮어쓰게 됩니다. 그러나 전체가 아니라 부분적으로 업데이트를 하려면 스프레드 연산자를 사용합니다.
function Hyun() {
    const [car, setCar] = useState({
        brand: '현대',
        model: '산타페',
        year: '2023',
        color: 'black',
    })

    // 여러개의 값을 가지고 있는 useState의 값을 부분적으로 바꾸고 싶을 때 스프레드 연산자를 사용한다.
    const updateColor = () =>{
        setCar(previousState => {
            return {...previousState, color: 'blue'}
        })
    };

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}</p>
            <button onClick={updateColor}>blue</button>
        </>
    )
}

// export는 하나만 할 수 있다.
export default Hyun;