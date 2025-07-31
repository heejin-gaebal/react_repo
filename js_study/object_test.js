const x = {
  title: '기본제목',
  content: '기본내용',
};

const y = { ...x, title: '타이틀' };

/*
  const y = {...x} 는 x의 키값을 완전복제
  const y에서 타이틀 키 값 새로 주면 덮어쓰기됨
 */
console.log(y);
