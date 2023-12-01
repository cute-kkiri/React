import {useState, createContext, useContext} from 'react';
// import ReactDOM from 'react-dom';

const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState('hj');

    // 컨텍스트 제공자를 사용하여 콘텍스트가 필요한 구성 요소 트리를 래핑합니다.
    return (
        <>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}`}</h1>
                <Component2 />
            </UserContext.Provider>
        </>
    )
}

function Component2() {
    return (
        <>
            <h1>Component2</h1>
            <Component3 />
        </>
    )
}

function Component3() {
    return (
        <>
            <h1>Component3</h1>
            <Component4 />
        </>
    )
}

function Component4() {
    return (
        <>
            <h1>Component4</h1>
            <Component5 />
        </>
    )
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component5</h1>
            <h2>{`Hello ${user} again !`}</h2>
        </>
    )
}

export default Component1;