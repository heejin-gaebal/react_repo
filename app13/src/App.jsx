import './App.css';
import Counter from './components/Counter';
import { MyContextProvider } from './context/MyContext';

function App() {
  return (
    <>
      <h1>App13</h1>
      {/* MyContext.Provider 저장공간에 value 넣어놓고 'data'를 꺼낼쓸 수 잇다 */}
      {/* 그 자리에 MyContext.jsx에서 만들어준 MyContextProvider저장공간을 활용 */}
      <MyContextProvider>
        <Counter />
      </MyContextProvider>
    </>
  );
}

export default App;
