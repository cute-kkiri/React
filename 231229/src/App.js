import React from 'react';
import axios from 'axios'
import Images from './Images';

function App() {
    const url ='https://api.thecatapi.com/v1/images/search';
    /*
    const getData = async (url) => {
        let response = await axios.get(url);
        return response.data;
    }
    
    let res = getData(url);
    res.then((data) => {
        // console.log(data);
        // console.log(JSON.stringify(data));
        let result=[];
        data.map((item,index) =>{
            // console.log(index + ". " + item.id + ". " + item.url );
            result.push(<Images key={index} url={item.url}/>);
        });
        console.log(result);
        return (
            <p>{result}</p>
        ); 
    });
    */
   
    axios.get(url)
    .then(function (response) {
        // 성공 핸들링
        let data = response.data;
        let result=[];
        data.map((item,index) =>{
            console.log(index + " : " + item.id + " ==> " + item.url );
            result.push(<Images key={index} url={item.url}/>);
        });
        // console.log(result);
        return (
            <p>${result}</p>
        ); 
    })
    .catch(function (error) {
        // 에러 핸들링
        console.log(error);
    })
    .finally(function () {
        // 항상 실행되는 영역
    });
}

export default App;