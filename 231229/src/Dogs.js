import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Images from './Images';

function Dogs() {
  const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchsetDogs = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setDogs(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
        setDogs(response.data.message); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchsetDogs();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!dogs) return null;
  return (
    <>
      {dogs.map((dog,index) => (
         <Images key={index} url={dog}/>
      ))}
    </>
  );
}

export default Dogs;