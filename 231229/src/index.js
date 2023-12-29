import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Users from './Users';
import Images from './Images';
import Cats from './Cats'
import Dogs from './Dogs'
import App from './App'
import BoxOffice from './BoxOffice'
import JsonData from './JsonData'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='root'>
        
        <hr />
        <JsonData />

        {/* <Images url='https://cdn2.thecatapi.com/images/9pj.jpg' />
        <hr />
        <Users />
        <hr />
        <Dogs />
        <hr />
        <Cats /> */}
        <hr />
        <BoxOffice date='20231228' />
        {/* <Users />
        <hr/>
        <Images url='https://cdn2.thecatapi.com/images/MTY2MDIwMw.jpg'/> 
        <hr/>
        <Cats/>
        <hr/>
        <Dogs/> */}
    </div>
);