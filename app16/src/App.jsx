import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <h1>App16</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
