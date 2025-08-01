const CounterDisplay = ({ x }) => {
  //파라미터로 넘어온 x객체를 구조분해할당으로 받는다
  //구조분해할당으로 바로 객체안에 x필드값을 가져올수있음
  return <h2>Num Display Component: {x}</h2>;
};

export default CounterDisplay;

// 클래스형 컴포넌트와 함수형 컴포넌트
// 문법만 다르고 결과는 똑같음
// ~우리가 쓰는건 함수형 컴포넌트~
