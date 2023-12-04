// rafce -> tab키 react 기본 확장자 자동완성 기능. (ES7 React/Redux/GraphQL/React-Native snippets)
import React from 'react';

function Box(props) {
    const clickMe = () => {
        alert('리액트 수업')
    }
    
    return (
        /* class가 className */
        <div className="box">
            {/* props받아오기. box가 가지고 있는 값을 받아옴. */}
            Box{props.name}
               {props.num}
            <button onClick={clickMe}>클릭</button>
        </div>
    )
}

export default Box
