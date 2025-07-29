import logo from './logo.svg';
import './App.css';
import Hello from './Hello.jsx';
import World from './World.jsx';
import KhButton from './KhButton.jsx';
import KhDiv from './KhDiv.jsx';

function App() {
  /*컴포넌트형식으로 호출*/
  return (
    <>
      <Hello />
      <World />
      <KhButton />
      <KhButton />
      <KhButton />
      <KhButton />
      <KhButton />
      <KhDiv />
    </>
  );
}
export default App;

// <React.Fragment>
//   <ul>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>
// </React.Fragment>
// 리턴을 여러개 해줄때는 부모요소가 여러개필요
//React.Fragment or < >빈태그:return 바로뒤에</>
// => 부모요소가 필요한데 실제로 랜더링 되지않게
//괄호 없어도 됨
//해당 파일 열려있어야 자동완성 가능
//rsc 단축키로 컴포넌트 만들 수 있음
