import {useState, useEffect} from 'react';

function Counter() {
    // 2배수 되는거 만들거야.
    const [count, setCount] = useState(0); // 초기값 0
    const [calculation, setCalculation] = useState(0); // 초기값 0

    useEffect(() => {
        setCalculation(() => count * 2);

    // 여기서 count를 빼주면 calculation에 2배수가 안나옴.
    }, [count]);

    return (
        <>
            {/* 버튼 클릭마다 올라가는 count */}
            <p>Count: {count}</p>

            {/* 매개 변수(count?)에 +1 */}
            <button onClick={() => {setCount((c) => c+1)}}>+</button>

            {/* count의 2배수 */}
            <p>Calculation: {calculation}</p>
        </>
    )
}

export default Counter;