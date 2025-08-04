import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
// import { MyContextProvider } from './context/MyContext';
import { Provider } from 'react-redux';
import rootStore from './redux/store';

function App() {
  //MyContext.Provider라는 전역공간에 쓸 value값을 useState로 정하고 넣어주기
  // const [num, setNum] = useState(0);
  //redux가 제공하는 store사용
  return (
    <>
      <h1>App15 Redux</h1>
      {/* <MyContextProvider> */}
      <Provider store={rootStore}>
        <Counter />
      </Provider>
      {/* </MyContextProvider> */}
    </>
  );
}

export default App;
