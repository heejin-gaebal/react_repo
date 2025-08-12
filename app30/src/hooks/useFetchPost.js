// 데이터 호출관련 로직
async function useFetchPost(url, jsonObj) {
  // url과 option은 외부에서 받아야함
  // const url = 'http://127.0.0.1:8080/api/notice';
  const option = {
    //post방식의 option은 이렇게 default
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonObj),
  };
  const resp = await fetch(url, option);
  return resp;
}

export default useFetchPost;
