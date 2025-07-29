import './App.css';
import Card from './components/Card';
import MyBtn from './components/MyBtn';
import BoardInsertPage from './pages/board/BoardInsertPage';
import HomePage from './pages/HomePage';

function App() {
  const arr = ['하나', '둘', '셋'];
  // const temp = '안녕';
  // const temp = 789;
  // const temp = true; //구현안됨
  // const temp = [10, 20, 30];
  // const temp = 3.14;
  // const temp = () => {
  //   return '리턴이지롱';
  // };
  // const temp = '승인';
  // const isLogin = true;
  // if문 대신 삼항연산자 or 논리연산자 사용
  return (
    <>
      {arr.map((elem, idx) => {
        return <MyBtn x={elem} />;
      })}
    </>
  );
}
/*
  <Card a="♥" b="3" />
  <Card a="♣" b="5" />
  <Card a="♠" b="7" />
  <Card a="♦" b="9" />
  <MyBtn x="하나" />
  <MyBtn x="둘" />
  <MyBtn x="셋" />
*/
export default App;
