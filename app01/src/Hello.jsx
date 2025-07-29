import Bye from './Bye';

// 리턴값으로 태그를 뱉어내는 함수
function Hello() {
  //컴포넌트는 대문자로 시작하게 짓고 함수도 똑같이 맞추기
  //Hello라는 컴포넌트안에 Bye라는 컴포넌트 넣어보기
  return (
    <>
      <h1>HELLO!</h1>
      <Bye />
    </>
  );
}

function f02() {
  return <h1>REACT</h1>;
}

function f03() {
  return <h1>WORLD</h1>;
}

// 함수 내보내기
export default Hello;
//기본적으로 내보낼 때
// export { f01, f02, f03 };
