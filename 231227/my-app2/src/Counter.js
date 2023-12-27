// import React from 'react';
import React, { useState } from 'react';

function Counter() {
    // 컴포넌트에 상태 변수 추가
    // number=0라는 상태변수와 setNumber라는 값을 설정해주는 함수가 자동으로 추가.
    const [number, setNumber] = useState(0);

    
    // 증가시키는 함수
    const onIncrease = () => {
        console.log('+1');
        // 상태 변수값을 변경 : 1 증가.
        setNumber(number + 1);
    }

    // 감소시키는 함수
    const onDecrease = () => {
        console.log('-1');
        // 상태 변수값을 변경 : 1 감소.
        setNumber(number + 2);
    }
   

    return (
    <div>
        {/* 상태 변수값 number를 출력해라. */}
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
    );
}

export default Counter;