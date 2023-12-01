/* 
    useReducer => useState와 비슷하다.
    사용자 정의 논리 상태를 허용
    복잡한 논리에 의존하는 여러 상태를 추적하는 경우
    useReducer가 유용할 수 있다.
    두 개의 인수를 허용한다.
    useReducer(<reducer>, <initialState>)
*/

import {useReducer} from 'react';

// react는 마지막 항목에 쉼표(,) 안해주면 오류 남.
const initialTodos = [
    {
        // react에서 고유한 id를 설정하면 상태를 설정할 수 있다.
        id: 1,
        title: 'Todo 1',
        complete: false,
    },
    {
        id: 2,
        title: 'Todo 2',
        complete: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'COMPLETE':
            return state.map((todo) => {
                if(todo.id === action.id) {
                    return {...todo, complete: !todo.complete}
                } else {
                    return todo;
                };
            })
        default: 
            return state;
    };
};

function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({type: 'COMPLETE', id: todo.id});
    }

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    )
}

export default Todos;