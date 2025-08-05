import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <h1>app review [reducer , redux, slice]</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
