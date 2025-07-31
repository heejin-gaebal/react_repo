import './App.css';
import {
  MyContext,
  MyContextProvider,
} from './componentes/context/CountContext';
import Counter from './componentes/Counter';
import Counter02 from './componentes/Counter02';
import Hello from './componentes/Hello';

function App() {
  return (
    <>
      {/* <Counter /> */}
      <MyContextProvider>
        <Hello />
        <Counter02 />
      </MyContextProvider>
    </>
  );
}

export default App;
