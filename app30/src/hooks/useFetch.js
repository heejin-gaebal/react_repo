import { useEffect, useState } from 'react';

function useFetch(url, option = {}, initState = null) {
  // option={} 옵션은 선택적으로 전달할 거라 default값
  //useState의 기본값으로 셋팅
  const [data, setData] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    // const url = 'http://127.0.0.1:8080/api/notice';
    // 사용할 url은 파라미터로 받아오기
    const option = {};
    fetch(url, option)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });
    return () => {
      //뒤늦게 불필요한 작업 막기
      isMounted = false;
    };
  }, []);

  return { data, isLoading }; //값을 객체로 묶어서 return
}

export default useFetch;
