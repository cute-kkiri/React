import {useState, useEffect} from 'react';

function Timer() {
    const [count, setCount] = useState(0); // 초기값 0

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    
    // 비어있는 [] dependency 자리에 써준다. 안하면 setTimeout인데 count가 계속 올라감.
    },[]);

    return <h1>i have renderd {count} times !</h1>
        
}

export default Timer;