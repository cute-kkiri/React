import {useState} from 'react';

// 각 구성 요소에 중첩해서 전달하는 것을 프롤 드릴링이라고 한다.(불편한 방법)

// 불편한 방법
function Component1() {
    const [user, setUser] = useState('hj');

    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </>
    )
}

function Component2({user}) {
    return (
        <>
            <h1>Component2</h1>
            <Component3 user={user} />
        </>
    )
}

function Component3({user}) {
    return (
        <>
            <h1>Component3</h1>
            <Component4 user={user} />
        </>
    )
}

function Component4({user}) {
    return (
        <>
            <h1>Component4</h1>
            <Component5 user={user} />
        </>
    )
}

function Component5({user}) {
    return (
        <>
            <h1>Component5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}

export default Component1;