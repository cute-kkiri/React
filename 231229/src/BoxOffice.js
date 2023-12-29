import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Boxoffice(props) {
  const [boxoffice, setBoxoffice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchsetBoxoffice = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setBoxoffice(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url += props.date;
        const response = await axios.get(url);
        setBoxoffice(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchsetBoxoffice();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!boxoffice) return null;
  return (
    <>
      {boxoffice.boxOfficeResult.dailyBoxOfficeList.map((office,index) => (
         <h3 key={office.rnum}>{office.rank}. {office.movieNm}({office.openDt})</h3>
      ))}
    </>
  );
}

export default Boxoffice;