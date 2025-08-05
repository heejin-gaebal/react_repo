import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardList from './pages/BoardList';
import GalleryList from './pages/GalleryList';
import NoticeList from './pages/NoticeList';
import BoradInsert from './pages/BoradInsert';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/board/list" element={<BoardList />}></Route>
          <Route path="/board/insert" element={<BoradInsert />}></Route>
          <Route path="/notice/list" element={<NoticeList />}></Route>
          <Route path="/gallery/list" element={<GalleryList />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
