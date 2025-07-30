import Hello from './Hello';
import World from './World';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <hr />
      <Routes>
        <Route path="/hello" element={<Hello />}></Route>
        <Route path="/world" element={<World />}></Route>
        <Route path="*" element={<h1>not found 경로확인</h1>}></Route>
      </Routes>
    </>
  );
};

export default Home;
