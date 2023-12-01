import {useEffect, useState} from 'react';

function Fetch() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/showMe')
        .then((res) => {
            return res.json();
        }).then(function (result) {
            setData(result);
        })
    }, []); // [] => 한 번만 실행되어야하기 때문에

    return (
        <ul>
            {data.map((v, idx) => 
            <li key={`${idx}>-${v}`}>
                {v}
            </li>)}
        </ul>
    )
}

export default Fetch;

/* 
    자바 콘트롤러에서

    public class FirstController {
        @GetMapping("/showMe")
        public List<String>어쩌구저쩌구</String>
    }
*/