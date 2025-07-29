import styled from 'styled-components'; //스타일 라이브러리 import
const Khbtn = styled.button`
  background-color: orange;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
`;
/*
styled.button 으로 버튼 생성함
styled 변수를 사용해야 css자동완성 사용가능
백틱안에 인자값 담아서 함수호출 가능
Khbtn라는 변수를 컴포넌트처럼 활용 가능
*/

const Hello = () => {
  return <Khbtn>버튼입니당~</Khbtn>;
};

export default Hello;
