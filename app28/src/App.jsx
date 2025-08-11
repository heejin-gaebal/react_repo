// import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './redux/store';

function App() {
  return (
    <>
      <h1>App28</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
