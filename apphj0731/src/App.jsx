import './App.css';
import SubContent from './components/SubContent';
import Counter from './components/Counter';
import { NumContextProvider } from './context/CounterContext';

function App() {
  return (
    <NumContextProvider>
      <h1>AppHJ0731</h1>
      <SubContent />
      <Counter />
    </NumContextProvider>
  );
}

export default App;
