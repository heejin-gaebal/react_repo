import './App.css';
import Hello from './components/Hello';
import World from './components/World';
import { NumContextProvider, StrContextProvider } from './context/MyContext';

function App() {
  /*
    context 사용하기 
    해당 context를 누가 사용할 수 있는지 태그 안에 넣어주기
    <CounterContext.Provider value={4}> => 값을 공급해주기 (모든 타입 가능)
  */

  return (
    <>
      <NumContextProvider>
        <StrContextProvider>
          <World />
        </StrContextProvider>
      </NumContextProvider>
    </>
  );
}

export default App;
