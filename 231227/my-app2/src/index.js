import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Counter from './Counter';
import InputSample from './InputSample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode> 얘는 좀 느려서 그냥 div 써도 된다고 함.
    <div>
        <Counter />
        <hr />
        <InputSample />
    </div>
);