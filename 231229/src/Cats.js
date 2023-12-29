import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Images from './Images';

function Cats() {
  const [cats, setCats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchsetCats = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setCats(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng');
        setCats(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchsetCats();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!cats) return null;
  return (
    <>
      {cats.map((cat,index) => (
         <Images key={index} url={cat.url}/>
      ))}
    </>
  );
}

export default Cats;